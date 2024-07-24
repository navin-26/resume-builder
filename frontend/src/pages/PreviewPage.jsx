import React, { useRef, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import axios from 'axios';
import backgroundImage from '../assets/bg-2.webp';

const PreviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, templateId } = location.state || {};
  const previewRef = useRef(null);
  const [templateImage, setTemplateImage] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/auth/login/success', { withCredentials: true })
      .then(response => {
        if (response.data.user) {
          setUser(response.data.user);
        } else {
          navigate('/signin', { state: { from: location } });
        }
      })
      .catch(error => {
        console.error('Error during login check:', error);
        navigate('/signin', { state: { from: location } });
      });
  }, [navigate, location]);

  if (!formData) {
    return <div>No data available to display.</div>;
  }

  const ResumePreviewComponent = React.lazy(() => import(`../components/Templates/ResumePreview-${templateId}`));

  const handleDownload = async () => {
    if (previewRef.current) {
      try {
        const dataUrl = await toPng(previewRef.current, { pixelRatio: 3 });
        setTemplateImage(dataUrl);

        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'in',
          format: [8.27, 11.69],
        });

        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = 8.27;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('resume.pdf');

        navigate('/');
      } catch (error) {
        console.error('Error generating PDF', error);
      }
    } else {
      console.error('Preview reference is not set');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <button
        className="top-14 right-14 cursor-pointer flex justify-between bg-black px-3 py-2 rounded-full text-white hover:text-black tracking-wider shadow-xl hover:bg-yellow-500 hover:scale-105 duration-500 hover:ring-1 border-2 border-yellow-500 w-[200px] fixed"
        onClick={handleDownload}
      >
        DOWNLOAD
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5L12 21m0 0L4.5 13.5M12 21V3"
          ></path>
        </svg>
      </button>

      <div ref={previewRef} className="w-[8.27in] h-[11.69in] bg-white bg-opacity-0 shadow-lg p-4 mt-12">
        <React.Suspense fallback={<div>Loading...</div>}>
          <ResumePreviewComponent data={formData} />
        </React.Suspense>
      </div>
    </div>
  );
};

export default PreviewPage;

import React, { useRef, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import axios from 'axios';

const PreviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, templateId } = location.state || {};
  const previewRef = useRef(null);
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
        
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'in',
          format: [8.27, 11.69],
        });

        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = 8.27; // A4 width in inches
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('resume.pdf');

        // Navigate to home after the PDF is downloaded
        navigate('/');
      } catch (error) {
        console.error('Error generating PDF', error);
      }
    } else {
      console.error('Preview reference is not set');
    }
  };

  return (
    <div className="flex flex-col items-center h-full bg-cover bg-center relative container2">
      <button
        className="top-14 right-14 font-semibold cursor-pointer bg-black px-3 py-2 rounded-full text-white hover:text-black  hover:bg-yellow-500 border-2 border-yellow-500 w-[150px] fixed"
        onClick={handleDownload}
      >
        DOWNLOAD
      
      </button>

      <div ref={previewRef} className="w-[8.27in]  bg-white bg-opacity-60 shadow-lg p-4 mt-12 ">
        <React.Suspense fallback={<div>Loading...</div>}>
          <ResumePreviewComponent data={formData} />
        </React.Suspense>
      </div>
    </div>
  );
};

export default PreviewPage;

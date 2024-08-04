import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/context/AuthContext';
import image1 from '../assets/t-1.webp';
import image2 from '../assets/t-2.webp';
import image3 from '../assets/t-3.webp';
import image4 from '../assets/t-4.webp';
import './TemplatePage.css'; // Import your CSS file

const Templates = [
  {
    id: 1,
    name: 'template - 1',
    img: image1
  },
  {
    id: 2,
    name: 'template - 2',
    img: image2
  },
  {
    id: 3,
    name: 'template - 3',
    img: image3
  },
  {
    id: 4,
    name: 'template - 4',
    img: image4
  }
];

const TemplatePage = () => {
  const navigate = useNavigate();
  const {isAuthenticated} = useAuth();
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const firstImage = new Image();
    firstImage.src = image1;
    firstImage.onload = () => {
      const aspectRatio = firstImage.width / firstImage.height;
      const desiredHeight = 250; // Desired height for all images
      setImageDimensions({
        width: desiredHeight * aspectRatio,
        height: desiredHeight
      });
    };
  }, [])

  const handleTemplateClick = (templateId) => {
    if (isAuthenticated) {
      navigate(`/TemplateEditPage/${templateId}`);
    } else {
      navigate('/signin');
    }
  };

  return (
    <div className="bg-cover bg-center text-white md:h-screen sm:h-auto container3 pt-10 sm:pb-5 ">
      <div className="w-10/12 h-2/6 text-white bg-cyan-800 px-10 tracking-wider font-bold md:text-[4rem] sm:text-[2rem] slide-in-left ">
        <p>SELECT A</p>
        <p>TEMPLATE</p>
      </div>
      <div className="flex md:flex-row sm:flex-col justify-evenly items-center sm:gap-5 md:gap-0 cursor-pointer mt-8">
        {Templates.map((item) => (
          <div
            className="template-container border-2 border-black"
            key={item.id}
            onClick={() => handleTemplateClick(item.id)}
            style={{ width: imageDimensions.width, height: imageDimensions.height }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="template-image"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Keep image size unchanged
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplatePage;

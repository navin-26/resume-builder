import React, { useState, useEffect } from 'react';
import image from '../assets/bg-6.png';
import { useLocation, useNavigate } from 'react-router-dom';
import image1 from '../assets/t-1.webp';

const initialTemplates = [
  {
    id: 1,
    name: 'template - 1',
    img: image1,
  },
];

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [templates, setTemplates] = useState(initialTemplates);

  useEffect(() => {
    if (location.state?.newTemplate) {
      setTemplates((prevTemplates) => {
        // Check if template already exists
        const templateExists = prevTemplates.some(template => template.id === location.state.newTemplate.id);
        if (!templateExists) {
          return [...prevTemplates, location.state.newTemplate];
        }
        return prevTemplates;
      });
    }
  }, [location.state]);

  const toTemplate = () => {
    navigate('/Templates');
  };

  const toTemplateEditPage = (templateId) => {
    navigate(`/TemplateEditPage/${templateId}`);
  };

  return (
    <div className="bg-cover bg-center text-white h-screen px-28" style={{ backgroundImage: `url(${image})` }}>
      <div className='h-64 w-40 bg-slate-200 '>

      </div>
    </div>
  );
};

export default Dashboard;

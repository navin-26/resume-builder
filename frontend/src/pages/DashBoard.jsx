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
      <h1 className="text-7xl font-semibold tracking-wide py-24">DASHBOARD</h1>
      <div className="flex flex-row justify-start items-center gap-8">
        {templates.map((item) => (
          <div
            className="w-52 h-72 bg-gray-200 cursor-pointer flex items-center justify-center overflow-hidden"
            key={item.id}
            onClick={() => toTemplateEditPage(item.id)}
          >
            <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
          </div>
        ))}
        <button
          className="w-52 h-72 bg-black border border-gray-200 opacity-60 flex items-center justify-center"
          onClick={toTemplate}
        >
          <span className="text-[50px] text-yellow-500">+</span>
        </button>
      </div>
      <div className="bg-slate-300 absolute h-12 w-full right-0 left-0 bottom-0"></div>
    </div>
  );
};

export default Dashboard;

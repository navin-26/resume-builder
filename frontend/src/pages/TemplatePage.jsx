import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import image from '../assets/bg-4.png';
import image1 from '../assets/t-1.webp';

const Templates = [
  {
    id: 1,
    name: 'template - 1',
    img: image1
  },
  {
    id: 2,
    name: 'template - 2',
    img: image1
  },
  {
    id: 3,
    name: 'template - 3',
    img: image1
  },
  {
    id: 4,
    name: 'template - 4',
    img: image1
  }
];

const TemplatePage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleTemplateClick = (templateId) => {
    if (isAuthenticated) {
      navigate(`/TemplateEditPage/${templateId}`);
    } else {
      navigate('/SignIn');
    }
  };

  return (
    <div className="bg-cover bg-center text-white h-screen" style={{ backgroundImage: `url(${image})` }}>
      <div className="w-10/12 h-2/6 bg-white text-black subpixel-antialiased px-10 my-12 tracking-wider" style={{ fontWeight: '600', fontSize: '5.5rem' }}>
        <p>SELECT A</p>
        <p>TEMPLATE</p>
      </div>
      <div className="flex flex-row justify-evenly cursor-pointer">
        {Templates.map((item) => (
          <div className="w-56" key={item.id} onClick={() => handleTemplateClick(item.id)}>
            <img src={item.img} alt={item.name} />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default TemplatePage;

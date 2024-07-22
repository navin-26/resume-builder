import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/bg-5.webp';
import './Banner.css';

const TemplateEditPage = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/SignIn');
  };

  return (
    <div
      className="relative bg-cover bg-center text-white h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='flex'>
      <div className='border-2 border-white w-1/2 h-screen'>

</div>
<div className='border-2 border-white w-1/2 h-screen'>



</div>

      </div>
     
    </div>
  );
};

export default TemplateEditPage;

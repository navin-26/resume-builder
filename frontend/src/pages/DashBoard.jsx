import React from 'react';
import image from '../assets/bg-6.png';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/t-1.webp';

const templates = [
  {
    id: 1,
    name : 'template - 1',
    img : image1
  },


];

const Dashboard = () => {

  const navigate = useNavigate();

  const toTemplate = () => {
    navigate('/Templates');
  }

  return (
    <div className="bg-cover bg-center text-white h-screen px-28" style={{backgroundImage:`url(${image})`}}>
        <h1 className='text-7xl font-semibold tracking-wide py-24'>DASHBOARD</h1>
        <div className="flex flex-row justify-start">
        {templates.map((item) => (
            <div className="w-52 mr-14" key={item.id}>
              <img src={item.img} alt={item.name} />
            </div>
          ))}
          <button className="bg-black border border-gray-200 opacity-60" style={{width:'208px', height:'294px', padding:'4rem'}} onClick={toTemplate}>
           <span className='text-[50px] text-yellow-500'>+</span>
          </button>
    
        </div>
        <div className='bg-slate-300 absolute h-12 w-full right-0 left-0 bottom-0'></div>
    </div>
  )
}

export default Dashboard;
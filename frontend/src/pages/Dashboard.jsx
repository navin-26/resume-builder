import React from 'react';
import image from '../assets/bg-8.png';
import plus from '../assets/plus.png';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/temp1.jpg';

const templates = [
  {
    id: 1,
    name : 'template - 1',
    img : image1
  },
  {
    id: 2,
    name : 'template - 2',
    img : image1
  },
  {
    id: 3,
    name : 'template - 3',
    img : image1
  }
];

const Dashboard = () => {

  const navigate = useNavigate();

  const toTemplate = () => {
    navigate('/Template');
  }

  return (
    <div className="bg-cover bg-center text-white h-screen px-28" style={{backgroundImage:`url(${image})`}}>
        <h1 className='text-7xl font-semibold tracking-wide py-32'>DASHBOARD</h1>
        <div className="flex flex-row justify-start">
        {templates.map((item) => (
            <div className="w-52 mr-14" key={item.id}>
              <img src={item.img} alt={item.name} />
            </div>
          ))}
          <button className="bg-white" style={{width:'208px', height:'294px', padding:'4rem'}} onClick={toTemplate}>
            <img src={plus} alt="" width={80} />
          </button>
        </div>
    </div>
  )
}

export default Dashboard
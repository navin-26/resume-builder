import React from 'react';
import backgroundImage from '../assets/bg-1.png';

const About = () => {
  return (
    <div className="relative bg-white bg-center text-white h-screen container3 " >
      <h4 className="absolute top-8 left-1/2 transform -translate-x-1/2 text-[80px] font-bold text-yellow-500">
        ABOUT
      </h4>

      <div className="h-full flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 hover:cursor-pointer uppercase">
          <div className="card p-8 bg-white bg-opacity-10 rounded-lg hover:scale-105 transition-transform duration-200">
            <div className="align flex justify-between mb-4">
              <span className="red w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="yellow w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="green w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <h1 className="uppercase text-[18px]">User Benefits</h1>
            <p className=' mt-4'>
              <span className="text-yellow-500 font-bold">Ease of Use:</span> User-friendly interface.
            </p>
            <p className=' mt-4'>
              <span className="text-yellow-500 font-bold">Customization:</span> Various templates, fonts, and color schemes.
            </p>
            <p className=' mt-4'>
              <span className="text-yellow-500 font-bold">Real-Time Preview:</span> See changes as you make them.
            </p>
            <p className=' mt-4'>
              <span className="text-yellow-500 font-bold">Time-Saving:</span> Streamlined process for quick creation.
            </p>
          </div>
          <div className="card p-8 bg-white bg-opacity-10 rounded-lg text hover:scale-105 transition-transform duration-200">
            <div className="align flex justify-between mb-4">
              <span className="red w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="yellow w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="green w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <h1 className='text-[18px]'>How It Works</h1>
            <p className='text-pretty'>
              <span className="text-yellow-500 font-bold">1. Sign Up/In:</span> Create an account, sign in, or use Google Sign-In.
            </p>
            <p className='text-balance mt-4'>
              <span className="text-yellow-500 font-bold">2. Choose a Template:</span> Select from various professional templates.
            </p>
            <p className='text-balance mt-4'>
              <span className="text-yellow-500 font-bold">3. Enter Your Info:</span> Fill in your details with live preview.
            </p>
            <p className='text-balance mt-4'>
              <span className="text-yellow-500 font-bold">4. Preview & Download:</span> Preview in real-time and download as PDF.
            </p>
          </div>
          <div className="card p-8 bg-white bg-opacity-10 rounded-lg text hover:scale-105 transition-transform duration-200">
            <div className="align flex justify-between mb-4">
              <span className="red w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="yellow w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="green w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <h1 className='text-[18px]'>About the Team</h1>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

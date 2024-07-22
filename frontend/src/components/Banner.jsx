import React from 'react';
import backgroundImage from '../assets/banner.png';
import logo from '../assets/logo.png';
import './Banner.css'; // Import the CSS file for custom styles
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <button className="absolute top-0 right-0 m-6 flex items-center space-x-2 bg-transparent border-none cursor-pointer focus:outline-none md:p-3 sm:md:1">
        <img src={logo} alt="Logo" className="md:h-[32px] sm:h-[18px]" />
        <div className="text-white md:text-[32px] sm:text-[18px] font-bold hover:text-stone-300">
          <Link to="/signup">SIGN IN</Link>
        </div>
      </button>
      <div className="relative md:pl-24 sm:pl-12 md:w-1/2 sm:w-3/4 h-screen content-center">
        <div>
          <h5 className="2xl:text-[100px] xl:text-[90px] lg:text-[80px] md:text-[75px] sm:text-[35px] font-bold leading-none text-left">
            BUILD YOUR RESUME HERE
            <span className="blinking-cursor ">|</span> {/* Blinking cursor */}
          </h5>
        </div>
        <div className="mt-5 mb-8">
          <button className="bg-black border-2 border-yellow-500 text-white py-2 px-4 font-bold mb-5 hover:bg-yellow-500 hover:text-black">
            GET STARTED
          </button>
        </div>
        <div>
          <p className="lg:text-left tracking-wider font-bold 2xl:text-[18px] xl:text-[17px] lg:text-[17px] md:text-[16px] sm:text-[15px]">
            Our easy-to-use interface ensures that creating a resume is a hassle-free experience. Simply fill
            in your details, choose a template, and let our tool do the rest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

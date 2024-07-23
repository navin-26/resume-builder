import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from '../assets/bg-1.webp';
import './Banner.css'; // Assuming you have a CSS file for styling

const UserBanner = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/auth/login/success', { withCredentials: true })
      .then(response => {
        if (response.data.user) {
          setUser(response.data.user);
        } else {
          navigate('/signin');
        }
      })
      .catch(() => {
        navigate('/signin');
      });
  }, [navigate]);

  const handleLogout = () => {
    console.log('Logout button clicked'); // Log to check if the function is triggered
    axios.get('http://localhost:5000/auth/logout', { withCredentials: true })
      .then(response => {
        console.log('Logout successful:', response.data); // Log to check if the logout request was successful
        window.location.href = '/'; // Redirect to the home page after logout
      })
      .catch(error => {
        console.error('Logout error:', error);
      });
  };

  const toTemplate = () => {
    navigate('/Templates');
  }

  const toDashboard = () => {
    navigate('/Dashboard');
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  // Format user name
  const userName = user.name ? `${user.name.givenName || ''} ${user.name.familyName || ''}` : 'User';

  return (
    <div
      className="flex flex-col bg-cover bg-center text-white h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-end w-full">
        <button
          className="m-6 space-x-2 bg-transparent border-none cursor-pointer focus:outline-none md:p-3 sm:md:1"
          onClick={toDashboard}
        >
          <div className="text-white md:text-[32px] sm:text-[18px] font-bold hover:text-stone-300">
            DASHBOARD
          </div>
        </button>
        <button
          className="m-6 space-x-2 bg-transparent border-none cursor-pointer focus:outline-none md:p-3 sm:md:1"
          onClick={handleLogout}
        >
          <div className="text-white md:text-[32px] sm:text-[18px] font-bold hover:text-stone-300">
            LOG OUT
          </div>
        </button>
      </div>
      <div className="relative md:pl-24 sm:pl-12 md:w-1/2 sm:w-3/4 h-screen content-center">
        <div>
          <h5 className="2xl:text-[100px] xl:text-[90px] lg:text-[80px] md:text-[75px] sm:text-[35px] font-bold leading-none text-left">
            WELCOME, {userName}
            <span className="blinking-cursor">|</span> 
          </h5>
        </div>
        <div className="mt-5 mb-8">
          <button className="bg-black border-2 border-yellow-500 text-white py-2 px-4 font-bold mb-5 hover:bg-yellow-500 hover:text-black" onClick={toTemplate}>
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

export default UserBanner;
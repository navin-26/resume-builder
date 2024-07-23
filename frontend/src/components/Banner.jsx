import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from '../assets/bg-1.webp';
import image1 from '../assets/t-1.webp';
import './Banner.css';

const Banner = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/auth/login/success', { withCredentials: true })
      .then(response => {
        if (response.data.user) {
          setUser(response.data.user);
        }
      })
      .catch(error => {
        console.error('Error during login check:', error);
      });
  }, []);

  const handleSignInClick = () => {
    navigate('/SignIn');
  };

  const handleLogout = () => {
    axios.get('http://localhost:5000/auth/logout', { withCredentials: true })
      .then(() => {
        setUser(null);
        navigate('/');
      })
      .catch(error => {
        console.error('Logout error:', error);
      });
  };

  const toTemplate = () => {
    if (user) {
      navigate('/Templates');
    } else {
      navigate('/SignIn');
    }
  };

  const toDashboard = () => {
    navigate('/Dashboard');
  };

  const userName = user ? `${user.name.givenName || ''} ${user.name.familyName || ''}` : 'User';

  return (
    <div
      className="relative bg-cover bg-center text-white h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-end w-full">
        {user ? (
          <>
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
          </>
        ) : (
          <button
            className="absolute top-0 right-0 m-6 flex items-center space-x-2 bg-transparent border-none cursor-pointer focus:outline-none md:p-3 sm:md:1"
            onClick={handleSignInClick}
          >
            <div className="text-white md:text-[32px] sm:text-[18px] font-bold hover:text-stone-300">
              SIGN IN
            </div>
          </button>
        )}
      </div>
      <div className="relative md:pl-24 sm:pl-12 md:w-1/2 sm:w-3/4 h-screen content-center">
        <div>
          <h5 className="2xl:text-[100px] xl:text-[90px] lg:text-[80px] md:text-[75px] sm:text-[35px] font-bold leading-none text-left">
            {user ? `WELCOME, ${userName}` : 'BUILD YOUR RESUME HERE'}
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

export default Banner;

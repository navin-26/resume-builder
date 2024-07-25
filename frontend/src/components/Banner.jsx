import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './context/AuthContext';
import backgroundImage from '../assets/bg-1.webp';
import './Banner.css';

const Banner = () => {
  const { isAuthenticated, logout } = useAuth();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      axios.get('http://localhost:5000/auth/login/success', { withCredentials: true })
        .then(response => {
          if (response.data.user) {
            setUser(response.data.user);
          }
        })
        .catch(error => {
          console.error('Error during login check:', error);
        });
    } else {
      setUser(null);
    }
  }, [isAuthenticated]);

  const handleSignInClick = () => {
    navigate('/signin');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toTemplate = () => {
    if (isAuthenticated) {
      navigate('/Templates');
    } else {
      navigate('/signin');
    }
  };

  const userName = user ? `${user.name.givenName || ''} ${user.name.familyName || ''}` : 'User';

  return (
    <div
      className="relative bg-cover bg-center text-cyan-800 h-screen container3"
    >
      <div className="absolute top-6 right-6 flex flex-col space-y-4">
        {isAuthenticated ? (
          <button
            className="bg-transparent border-none cursor-pointer text-black font-bold hover:text-yellow-500 text-[20px] md:text-[35px]"
            onClick={handleLogout}
          >
            LOG OUT
          </button>
        ) : (
          <button
            className="bg-transparent border-none cursor-pointer text-black font-bold hover:text-yellow-500 text-[20px] md:text-[35px]"
            onClick={handleSignInClick}
          >
            SIGN IN
          </button>
        )}
      </div>
      <div className="relative md:pl-24 sm:pl-12 md:w-1/2 sm:w-3/4 h-screen content-center">
        <div>
          <h5 className="2xl:text-[100px] xl:text-[90px] lg:text-[80px] md:text-[75px] sm:text-[35px] font-bold leading-none text-left text-cyan-800">
            {isAuthenticated ? `WELCOME, ${userName}` : 'BUILD YOUR RESUME HERE'}
            <span className="blinking-cursor">|</span>
          </h5>
        </div>
        <div className="mt-5 mb-8">
        <button className="bg-black text-white py-2 px-4 font-bold mb-5 hover:bg-yellow-500 hover:text-black shadow-xl shadow-black/50 hover:shadow-yellow-500/50" onClick={toTemplate}>
  GET STARTED
</button>

        </div>
        <div>
          <p className="lg:text-left tracking-wider font-bold 2xl:text-[20px] xl:text-[17px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-black ">
            Our easy-to-use interface ensures that creating a resume is a hassle-free experience. Simply fill
            in your details, choose a template, and let our tool do the rest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

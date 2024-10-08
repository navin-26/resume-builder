import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './context/AuthContext';
import './Banner.css';

const Banner = ({ isAuthenticated, openModal }) => {
  const { logout } = useAuth();
  const [user, setUser] = useState(null);
  const [displayedText, setDisplayedText] = useState('');
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

  useEffect(() => {
    let fullText = isAuthenticated 
      ? `  WELCOME, ${user ? `${user.name.givenName || ''} ${user.name.familyName || ''}` : 'User'}` 
      : '  BUILD YOUR RESUME HERE';

    setDisplayedText(''); // Reset displayed text

    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the typing speed here (100ms per character)

    return () => clearInterval(typingInterval); // Cleanup on component unmount
  }, [isAuthenticated, user]);

  const handleLogout = () => {
    logout();
    setUser(null); // Reset user state
    navigate('/');
  };

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/templates');
    } else {
      openModal();
    }
  };

  return (
    <div className="relative bg-cover bg-center text-cyan-800 h-screen container3">
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
            onClick={openModal}
          >
            SIGN IN
          </button>
        )}
      </div>
      <div className="relative xl:pl-24 sm:pl-12 md:w-1/2 sm:w-3/4 h-screen content-center">
        <div>
          <h5 className="2xl:text-[100px] xl:text-[90px] lg:text-[70px] md:text-[65px] sm:text-[30px] font-bold leading-none text-left text-cyan-800 uppercase">
            {displayedText}
            <span className="blinking-cursor">|</span>
          </h5>
        </div>
        <div className="md:mt-5 md:mb-8 sm:mt-3 sm:mb-5">
          <button className="bg-black text-white md:py-2 md:px-4 md:mb-5  sm:py-1 sm:px-2 sm:mb-2 sm:text-[10px] md:text-[20px]  font-bold  hover:bg-yellow-500 hover:text-black shadow-xl shadow-black/50 hover:shadow-yellow-500/90" onClick={handleGetStarted}>
            GET STARTED
          </button>
        </div>
        <div>
          <p className="lg:text-left tracking-wider font-bold 2xl:text-[20px] xl:text-[17px] lg:text-[17px] md:text-[16px] sm:text-[12px] text-black">
            Our easy-to-use interface ensures that creating a resume is a hassle-free experience. Simply fill
            in your details, choose a template, and let our tool do the rest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

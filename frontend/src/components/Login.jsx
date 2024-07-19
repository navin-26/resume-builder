import React from 'react';
import axios from 'axios';
import backgroundImage from '../assets/banner.png'

const Login = () => {
  const handleLogin = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };

 

  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container border-0 border-white w-1/5 p-6 px- bg-white bg-opacity-10 rounded-md">
        <form className="flex flex-col space-y-12 items-center">
          <h1 className="text-3xl font-bold mb-3 text-white">SIGN IN</h1>
          
          
          <button onClick={handleLogin}
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 w-full"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

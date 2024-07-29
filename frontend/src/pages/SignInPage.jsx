import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);



  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/google`, "_self");
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center container4"
     
    >
      <div className="container border-0 border-white lg:w-1/4 md:w-1/3 sm:w-11/12 xl:p-6 sm:p-3 bg-black bg-opacity-10 rounded-md">
          <h1 className="text-3xl font-bold mb-3 text-cyan-800">SIGN IN</h1>
          <button
            type="button"
            onClick={googleAuth}
            className="p-2 border border-gray-300 w-2/3 rounded-full bg-black hover:bg-yellow-500 hover:text-black text-white flex items-center justify-center space-x-2 text-[10px]"
          >
            <FaGoogle size={18} />
            <span>SIGN IN WITH GOOGLE</span>
          </button>
          
      </div>
    </div>
  );
};

export default SignIn;

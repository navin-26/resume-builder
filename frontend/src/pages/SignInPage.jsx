import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from '../assets/bg-2.webp';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/auth/signin', data, { withCredentials: true });
      reset();
      const redirectTo = location.state?.from?.pathname || '/';
      navigate(redirectTo);
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  };

  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/google`, "_self");
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center container4"
     
    >
      <div className="container border-0 border-white lg:w-1/4 md:w-1/3 sm:w-11/12 xl:p-6 sm:p-3 bg-black bg-opacity-10 rounded-md">
        <form className="flex flex-col space-y-6 items-center" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl font-bold mb-3 text-black">SIGN IN</h1>
          <button
            type="button"
            onClick={googleAuth}
            className="p-2 border border-gray-300 w-2/3 rounded-full bg-black hover:bg-yellow-500 hover:text-black text-white flex items-center justify-center space-x-2 text-[10px]"
          >
            <FaGoogle size={18} />
            <span>SIGN IN WITH GOOGLE</span>
          </button>
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 w-2/3 rounded-full placeholder-gray-900"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          <div className="relative w-2/3">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="p-2 border border-gray-300 w-full rounded-full placeholder-gray-900"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
                validate: {
                  hasNumber: (value) => /\d/.test(value) || 'Password must contain a number',
                  hasUppercase: (value) => /[A-Z]/.test(value) || 'Password must contain an uppercase letter',
                  hasSymbol: (value) => /[!@#$%^&*]/.test(value) || 'Password must contain a symbol',
                },
              })}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          <button
            type="submit"
            className="bg-black border-2 border-yellow-500 text-white py-2 hover:bg-yellow-500 hover:text-black w-1/3 rounded-full"
          >
            SIGN IN
          </button>
          <div className="flex items-center w-full my-3">
            <hr className="flex-grow border-yellow-500" />
            <span className="mx-4 text-white font-bold">OR</span>
            <hr className="flex-grow border-yellow-500" />
          </div>
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className="bg-black border-2 border-yellow-500 text-white py-2 hover:bg-yellow-500 hover:text-black w-1/3 rounded-full"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

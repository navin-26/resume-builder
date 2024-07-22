import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/bg-3.webp';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/google`, "_self");
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container border-0 border-white lg:w-1/4 md:w-1/3 sm:w-11/12 xl:p-6 sm:p-3 bg-white bg-opacity-10 rounded-md">
        <form className="flex flex-col space-y-6 items-center" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl font-bold mb-3 text-white">SIGN UP</h1>
          <button
            type="button"
            onClick={googleAuth}
            className="p-2 border border-gray-300 w-2/3 rounded-full bg-white hover:bg-black hover:text-white flex items-center justify-center space-x-2 text-[10px]"
          >
            <FaGoogle size={18} />
            <span>SIGN UP WITH GOOGLE</span>
          </button>
          <input
            type="text"
            placeholder="Name"
            className="p-2 border border-gray-300 w-2/3 rounded-full placeholder-gray-900"
            {...register('name', {
              required: 'Name is required',
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: 'Name can only contain letters',
              },
            })}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
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
            SIGN UP
          </button>
          <div className="flex items-center w-full my-3">
            <hr className="flex-grow border-yellow-500" />
            <span className="mx-4 text-white font-bold">OR</span>
            <hr className="flex-grow border-yellow-500" />
          </div>
          <button
            type="button"
            onClick={() => navigate('/signin')}
            className="bg-black border-2 border-yellow-500 text-white py-2 hover:bg-yellow-500 hover:text-black w-1/3 rounded-full"
          >
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

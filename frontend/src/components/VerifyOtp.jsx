import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isPasswordReset, setIsPasswordReset] = useState(location.state?.isPasswordReset || false);

  const onSubmit = async (data) => {
    try {
      const endpoint = isPasswordReset ? 'reset-password' : 'verify-otp';
      await axios.post(`http://localhost:5000/auth/${endpoint}`, data);
      reset();
      if (isPasswordReset) {
        navigate('/signin');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('OTP verification error:', error);
    }
  };

  return (
    <div className="relative bg-cover bg-center h-screen flex items-center justify-center container4">
      <div className="container border-0 border-white lg:w-1/4 md:w-1/3 sm:w-11/12 xl:p-6 sm:p-3 bg-black bg-opacity-10 rounded-md">
        <form className="flex flex-col space-y-6 items-center" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl font-bold mb-3 text-black">{isPasswordReset ? 'RESET PASSWORD' : 'VERIFY OTP'}</h1>
          <input
            type="email"
            placeholder="Email"
            defaultValue={location.state?.email || ''}
            className="p-2 border border-gray-300 w-2/3 rounded-full placeholder-gray-900"
            {...register('email', { required: 'Email is required' })}
            readOnly
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          <input
            type="text"
            placeholder="OTP"
            className="p-2 border border-gray-300 w-2/3 rounded-full placeholder-gray-900"
            {...register('otp', { required: 'OTP is required' })}
          />
          {errors.otp && <p className="text-red-500 text-xs mt-1">{errors.otp.message}</p>}
          {isPasswordReset && (
            <>
              <input
                type="password"
                placeholder="New Password"
                className="p-2 border border-gray-300 w-2/3 rounded-full placeholder-gray-900"
                {...register('newPassword', {
                  required: 'New Password is required',
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
              {errors.newPassword && <p className="text-red-500 text-xs mt-1">{errors.newPassword.message}</p>}
            </>
          )}
          <button
            type="submit"
            className="bg-black border-2 border-yellow-500 text-white py-2 hover:bg-yellow-500 hover:text-black w-1/3 rounded-full"
          >
            {isPasswordReset ? 'RESET PASSWORD' : 'VERIFY OTP'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;

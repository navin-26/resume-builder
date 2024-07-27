import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/auth/forgot-password', data);
      alert('Password reset email sent.'); // Notify user
      navigate('/signin'); // Redirect to sign-in page
    } catch (error) {
      console.error('Forgot password error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-3">Forgot Password</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        <button type="submit" className="bg-black text-white py-2 rounded">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;

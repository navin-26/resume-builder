import React, { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const SignInModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  const modalRef = useRef(null); // Ref for the modal content

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/auth/signin', data, { withCredentials: true });
      reset();
      onClose();
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  };

  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/google`, "_self");
  };

  useEffect(() => {
    // Function to handle clicks outside the modal
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    isOpen ? (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div ref={modalRef} className="bg-white p-6 rounded-md shadow-lg w-full max-w-sm">
          <h1 className="text-3xl font-bold mb-3 text-cyan-800">SIGN IN</h1>
          <button
            type="button"
            onClick={googleAuth}
            className="p-2 border border-gray-300 w-full rounded-full bg-black hover:bg-yellow-500 hover:text-black text-white flex items-center justify-center space-x-2 text-[10px]"
          >
            <FaGoogle size={18} />
            <span>SIGN IN WITH GOOGLE</span>
          </button>
       
        </div>
      </div>
    ) : null
  );
};

export default SignInModal;

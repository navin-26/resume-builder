import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const AuthHandler = () => {
  const { setIsAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get('token');

    if (token) {
      localStorage.setItem('token', token);
      setIsAuthenticated(true); // Make sure this function exists in the context
      query.delete('token');
      navigate({ search: query.toString() }, { replace: true }); // Clean URL
    }
  }, [location, setIsAuthenticated, navigate]);

  return null; // No UI needed
};

export default AuthHandler;

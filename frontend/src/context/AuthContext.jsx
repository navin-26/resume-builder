import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/auth/login/success', { withCredentials: true })
      .then(response => {
        setIsAuthenticated(response.data.user ? true : false);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

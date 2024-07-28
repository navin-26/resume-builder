import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authenticate = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/login/success', { withCredentials: true });
        setIsAuthenticated(response.data.user ? true : false);
      } catch (error) {
        console.error('Authentication error:', error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    // Check authentication only if not on specific pages
    const excludedPaths = ['/signin', '/signup', '/'];
    if (!excludedPaths.includes(window.location.pathname)) {
      authenticate();
    } else {
      setLoading(false);
    }
  }, []);

  const logout = () => {
    axios.get('http://localhost:5000/auth/logout', { withCredentials: true })
      .then(() => {
        setIsAuthenticated(false);
      })
      .catch(error => {
        console.error('Logout error:', error);
        setIsAuthenticated(false);
      });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

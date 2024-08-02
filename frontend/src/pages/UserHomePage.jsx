import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import Footer from "../components/Footer";
import { useAuth } from '../components/context/AuthContext';

const UserHomePage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="user-home-page">
      <Banner isAuthenticated={isAuthenticated} />
      <About />
      <Footer />
    </div>
  );
};

export default UserHomePage;

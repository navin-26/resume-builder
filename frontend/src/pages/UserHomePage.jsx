import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import Footer from "../components/Footer";

const UserHomePage = () => {
  return (
    <div className="user-home-page">
      <Banner isUserHome />
      <About />
      <Footer />
    </div>
  );
};

export default UserHomePage;

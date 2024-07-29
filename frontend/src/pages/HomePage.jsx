import React, { useState } from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Footer from '../components/Footer';
import SignInModal from '../components/SignInModal'; // Import the modal component

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="home-page">
      <Banner openModal={openModal} />
      <About />
      <Footer />
      <SignInModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default HomePage;

import React from 'react';

const About = () => {
  return (
    <div className="relative bg-black bg-center text-white h-48 flex items-center justify-center">
      <footer>
        Copyright &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default About;
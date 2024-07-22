import React, { useState } from 'react';
import PersonalInfo from '../components/steps/PersonalInfo';
import Education from '../components/steps/Education';
import Experience from '../components/steps/Experience';
import Skills from '../components/steps/Skills';
import Projects from '../components/steps/Projects';
import ResumePreview from '../components/ResumePreview';
import backgroundImage from '../assets/bg-5.webp';

const TemplateEditPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    education: [],
    experience: [],
    skills: [],
    projects: []
  });

  const steps = [
    <PersonalInfo data={formData} setData={setFormData} />,
    <Education data={formData} setData={setFormData} />,
    <Experience data={formData} setData={setFormData} />,
    <Skills data={formData} setData={setFormData} />,
    <Projects data={formData} setData={setFormData} />
  ];

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="flex relative bg-cover bg-center text-black h-auto py-8" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="w-1/2 p-8 border-4 border-green-400">
        {steps[currentStep]}
        <div className="flex justify-between mt-4">
          {currentStep > 0 && <button onClick={handlePrev} className="bg-black border-2 border-yellow-500 text-white py-2 px-4 font-bold mb-5 hover:bg-yellow-500 hover:text-black">Previous</button>}
          {currentStep < steps.length - 1 && <button onClick={handleNext} className="bg-black border-2 border-yellow-500 text-white py-2 px-4 font-bold mb-5 hover:bg-yellow-500 hover:text-black">Next</button>}
        </div>
      </div>
      <div className="w-1/2 p-8 border-4 border-red-700">
        <ResumePreview data={formData} />
      </div>
    </div>
  );
};

export default TemplateEditPage;

import React, { useState, useEffect, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PersonalInfo from '../components/steps/PersonalInfo';
import EducationInfo from '../components/steps/EducationInfo';
import Experience from '../components/steps/Experience';
import Skills from '../components/steps/Skills';
import Projects from '../components/steps/Projects';
import Summary from '../components/steps/Summary';
import backgroundImage from '../assets/bg-6.webp';
import image1 from '../assets/t-1.webp';

const Templates = [
  {
    id: 1,
    name: 'template - 1',
    img: image1
  },
  {
    id: 2,
    name: 'template - 2',
    img: image1
  },
  {
    id: 3,
    name: 'template - 3',
    img: image1
  },
  {
    id: 4,
    name: 'template - 4',
    img: image1
  }
];

const defaultStyles = {
  1: {
    textColor: '#25093F', // Default color for template 1
    fontStyle: 'sans' // Default font for template 1
  },
  2: {
    textColor: '#333333', // Default color for template 2
    fontStyle: 'Courier New, monospace' // Default font for template 2
  },
  3: {
    textColor: '#00000', // Default color for template 3
    fontStyle: 'sans' // Default font for template 3
  },
  4: {
    textColor: '#331900', // Default color for template 4
    fontStyle: 'sans' // Default font for template 4
  }
};

const TemplateEditPage = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const selectedTemplate = Templates.find(template => template.id === parseInt(templateId));

  const { textColor, fontStyle } = defaultStyles[templateId] || defaultStyles[1]; // Fallback to template 1

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    education: [
      {
        institute: '',
        degree: '',
        specialization: '',
        startDate: '',
        endDate: '',
        percentage: ''
      }
    ],
    experience: [
      {
        companyName: '',
        position: '',
        startDate: '',
        endDate: '',
      }
    ],
    skills: [],
    projects: [
      {
        projectTitle: '',
        startDate: '',
        endDate: '',
        description: ''
      }
    ],
    summary: '',
    textColor: textColor, // Set default text color
    fontStyle: fontStyle // Set default font style
  });

  const steps = [
    <PersonalInfo data={formData} setData={setFormData} />,
    <EducationInfo data={formData} setData={setFormData} />,
    <Experience data={formData} setData={setFormData} />,
    <Skills data={formData} setData={setFormData} />,
    <Summary data={formData} setData={setFormData} />,
    <Projects data={formData} setData={setFormData} />
  ];

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handlePreview = () => {
    navigate('/PreviewPage', { state: { formData, templateId } });
  };

  const [ResumePreviewComponent, setResumePreviewComponent] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const { default: Component } = await import(`../components/Templates/ResumePreview-${templateId}`);
        setResumePreviewComponent(() => Component);
      } catch (error) {
        console.error(`Error loading template ${templateId}`, error);
      }
    };

    loadComponent();
  }, [templateId]);

  return (
    <div className="flex relative bg-cover bg-center text-black h-auto py-8" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="w-1/2 p-8 ">
        {steps[currentStep]}
        <div className="flex justify-between mt-4">
          {currentStep > 0 && <button onClick={handlePrev} className="bg-black border-2 border-yellow-500 text-white py-2 px-4 font-bold mb-5 hover:bg-yellow-500 hover:text-black">Previous</button>}
          {currentStep < steps.length - 1 && <button onClick={handleNext} className="bg-black border-2 border-yellow-500 text-white py-2 px-4 font-bold mb-5 hover:bg-yellow-500 hover:text-black">Next</button>}
          {currentStep === steps.length - 1 && <button onClick={handlePreview} className="bg-black border-2 border-yellow-500 text-white py-2 px-4 font-bold mb-5 hover:bg-yellow-500 hover:text-black">Preview</button>}
        </div>
      </div>
      <div className="w-1/2 p-8 bg-gray-400 bg-opacity-60">
        <Suspense fallback={<div>Loading...</div>}>
          {ResumePreviewComponent && <ResumePreviewComponent data={formData} />}
        </Suspense>
      </div>
    </div>
  );
};

export default TemplateEditPage;

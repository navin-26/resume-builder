import React, { useState, useEffect, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PersonalInfo from '../components/steps/PersonalInfo';
import EducationInfo from '../components/steps/EducationInfo';
import Experience from '../components/steps/Experience';
import Skills from '../components/steps/Skills';
import Projects from '../components/steps/Projects';
import Summary from '../components/steps/Summary';
import axios from 'axios';
import { useAuth } from '../components/context/AuthContext';

// const defaultStyles = {
//   1: {
//     textColor: '#25093F', 
//     fontStyle: 'sans' 
//   },
//   2: {
//     textColor: '#333333', 
//     fontStyle: 'Courier New, monospace' 
//   },
//   3: {
//     textColor: '#00000',
//     fontStyle: 'sans' 
//   },
//   4: {
//     textColor: '#331900', 
//     fontStyle: 'sans' 
//   }
// };

const TemplateEditPage = () => {
  const { isAuthenticated } = useAuth();
  const { templateId } = useParams();
  const navigate = useNavigate(); 
  const [user, setUser] = useState(null);
  const [templates, setTemplates] = useState([{}, {}, {}, {}]);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        console.log('Waited for 3 seconds after data load');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loading]);
  
  useEffect(() => {
    const fetchData = async () =>{
      if(isAuthenticated){
        try{
          const response = await axios.get('http://localhost:5000/auth/login/success', { withCredentials: true })
          if (response.data.user) {
            setUser(response.data.user);
            setTemplates(Object.values(response.data.user.templates));
            setFormData(response.data.user.templates[0]);
            setLoading(false);          
          }
        }
        catch(error) {
          console.error('Error during login check:', error);
          setLoading(false);
        };
      }
    }
    fetchData();
  }, []);

  const steps = [
    <PersonalInfo data={formData} setData={setFormData} />,
    <EducationInfo data={formData} setData={setFormData} />,
    <Experience data={formData} setData={setFormData} />,
    <Skills data={formData} setData={setFormData} />,
    <Projects data={formData} setData={setFormData} />,
    <Summary data={formData} setData={setFormData} />
  ];

  const handleSaveTemplate = async (template) => {
    try {
      setTemplates(() => {
        const newTemplates = [...templates];
        
        for(let i=0; i<newTemplates.length; i++){
          if(i === templateId-1){
            newTemplates[i] = Object.values(template);
          }
          else{
            newTemplates[i] = templates[i];
          }
        }
        return newTemplates;
      });
      await axios.post('http://localhost:5000/auth/updateTemplate', { userId : user, template : template });
    } catch (error) {
      console.error('Error saving template', error);
    }
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    handleSaveTemplate(formData);
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
    <div className="flex relative bg-cover bg-center text-black h-auto py-8 container5 animate-fadeInLeft">
      <div className="w-1/2 p-8 animate-slideUp">
        {steps[currentStep]}
        <div className="flex justify-between mt-4 animate-slideUp">
          {currentStep > 0 && <button onClick={handlePrev} className="bg-black border-2 text-white py-2 px-4 font-bold mb-5 hover:bg-yellow-500 hover:text-black">Previous</button>}
          {currentStep < steps.length - 1 && <button onClick={handleNext} className="bg-black border-2 text-white py-2 px-4 font-bold mb-5 hover:bg-yellow-500 hover:text-black">Next</button>}
          {currentStep === steps.length - 1 && <button onClick={handlePreview} className="bg-black border-2 text-white py-2 px-4 font-bold mb-5 hover:bg-yellow-500 hover:text-black">Preview</button>}
        </div>
      </div>
      <div className="w-1/2 p-8 bg-gray-400 bg-opacity-60 animate-fadeInRight">
        <Suspense fallback={<div>Loading...</div>}>
          {!loading && ResumePreviewComponent && <ResumePreviewComponent data={formData} />}
        </Suspense>
      </div>
    </div>
  );
};

export default TemplateEditPage;

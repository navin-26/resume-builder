import React, { createContext, useState } from 'react';

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
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
    Summary: ''
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

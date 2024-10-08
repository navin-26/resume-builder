import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const ResumePreview = ({ data }) => {
  const defaultData = {
    fname: 'John',
    lname: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    city: 'New York',
    state: 'NY',
    summary: `Detail-oriented software developer with 7 years of experience in full-stack development. Proficient in Java, Python, and React, with a passion for building scalable web applications. Recognized for improving application performance by 30% through code optimization.`,
    education: [
      {
        institute: 'Hogwarts University',
        degree: 'B.Sc.',
        specialization: 'Computer Science',
        startDate: '2018',
        endDate: '2022',
        percentage: '78'
      }
    ],
    experience: [
      {
        companyName: 'ABC Corp',
        position: 'Software Developer',
        startDate: '2022',
        endDate: '2024'
      }
    ],
    skills: ['JavaScript', 'React', 'Node.js'],
    projects: [
      {
        projectTitle: 'Resume Builder',
        startDate: '2022',
        endDate: '2024',
        description: 'A web application to build resumes built using MERN.',
      }
    ],
    textColor: '#331900', 
  fontStyle: 'sans' 
  };

  const mergeEducationData = (educationArray, defaultEducation) => {
    return educationArray.map((edu, index) => {
      const defaultEdu = defaultEducation[index] || defaultEducation[0];
      return {
        institute: edu.institute || defaultEdu.institute,
        degree: edu.degree || defaultEdu.degree,
        specialization: edu.specialization || defaultEdu.specialization,
        startDate: edu.startDate || defaultEdu.startDate,
        endDate: edu.endDate || defaultEdu.endDate,
        percentage: edu.percentage || defaultEdu.percentage
      };
    });
  };

  const mergeExperienceData = (experienceArray, defaultExperience) => {
    return experienceArray.map((exp, index) => {
      const defaultExp = defaultExperience[index] || defaultExperience[0];
      return {
        companyName: exp.companyName || defaultExp.companyName,
        position: exp.position || defaultExp.position,
        startDate: exp.startDate || defaultExp.startDate,
        endDate: exp.endDate || defaultExp.endDate
      };
    });
  };

  const mergeProjectsData = (projectArray, defaultProject) => {
    return projectArray.map((proj, index) => {
      const defaultProj = defaultProject[index] || defaultProject[0];
      return {
        projectTitle: proj.projectTitle || defaultProj.projectTitle,
        description: proj.description || defaultProj.description,
        startDate: proj.startDate || defaultProj.startDate,
        endDate: proj.endDate || defaultProj.endDate
      };
    });
  };

  const previewData = {
    fname: data.fname || defaultData.fname,
    lname: data.lname || defaultData.lname,
    email: data.email || defaultData.email,
    phone: data.phone || defaultData.phone,
    city: data.city || defaultData.city,
    state: data.state || defaultData.state,
    summary: data.summary || defaultData.summary,
    education: data.education.length ? mergeEducationData(data.education, defaultData.education) : defaultData.education,
    experience: data.experience.length ? mergeExperienceData(data.experience, defaultData.experience) : defaultData.experience,
    skills: data.skills.length ? Array.from(new Set(data.skills)) : defaultData.skills,
    projects: data.projects.length ? mergeProjectsData(data.projects, defaultData.projects) : defaultData.projects,
    textColor: data.textColor || defaultData.textColor, 
    fontStyle: data.fontStyle || defaultData.fontStyle 
    
  };

  const previewStyle = {
    color: previewData.textColor,
    fontFamily: previewData.fontStyle
  };

  return (
    <div className="border h-[11.69in] w-[8.27in] p-12 py-14 rounded bg-[#fcfced] font-sans text-sm mx-auto overflow-hidden text-[#331900] text-[13px] font-medium relative">
      <div className="flex flex-row justify-between space-x-14 py-10 px-3 border-b border-gray-800 relative">
        <div className="relative">
          <div className="absolute left-0 top-0 transform translate-x-[-30%] translate-y-[-40%] bg-[#e7ef71] h-[60px] w-[60px] rounded-full"></div>
          <h2 className="text-[40px] font-bold uppercase mb-5 relative z-10" style={previewStyle}>{previewData.fname}</h2>
          <h2 className="text-[40px] font-bold uppercase mb-5 relative z-10" style={previewStyle}>{previewData.lname}</h2>
          <div className="absolute right-0 bottom-0 transform translate-x-[-40%] translate-y-[-40%] bg-[#89daf1] h-[30px] w-[30px] rounded-full"></div>
        </div>
        <div className="flex flex-col from-neutral-600s">
          <p className="text-lg flex items-center relative" style={previewStyle}>
            {previewData.city}, {previewData.state}
          </p>
          <p className="text-lg flex items-center" style={previewStyle}>
            {previewData.phone}
          </p>
          <p className="text-lg flex items-center" style={previewStyle}>
            {previewData.email}
          </p>
        </div>
      </div>
      
      <div className="flex flex-col justify-between px-3 mt-2 border-b border-gray-800">
        <h2 className="font-bold text-[18px] mb-4" style={previewStyle}>ABOUT ME</h2>
        <p className="mb-4" style={previewStyle}>{previewData.summary}</p>
      </div>
      
      <div className="flex flex-row px-3 border-b border-gray-800">
        <div className="w-1/2">
          <h3 className="text-[18px] font-bold my-3 py-3 uppercase text-black" style={previewStyle}>EXPERIENCE</h3>
          {previewData.experience.map((exp, index) => (
            <div key={index} className="my-3">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex-1">
                  <p className="font-bold mb-2" style={previewStyle}>{exp.companyName}</p>
                  <p className="mb-2" style={previewStyle}>{exp.position}</p>
                  <p className="font-bold" style={previewStyle}>{exp.startDate} - {exp.endDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="w-1/2">
          <h3 className="text-[18px] font-bold my-3 py-3 uppercase text-black" style={previewStyle}>EDUCATION</h3>
          {previewData.education.map((edu, index) => (
            <div className="flex flex-row md:items-center mb-4" key={index}>
              <div className="">
                <p className="font-bold uppercase" style={previewStyle}>{edu.institute}</p>
                <p className="mt-2 uppercase" style={previewStyle}>{edu.degree + " " + edu.specialization}</p>
                <p className="font-bold" style={previewStyle}>{edu.startDate} - {edu.endDate}</p>
                <span style={previewStyle}>{edu.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="border-b border-gray-800 px-3">
        <h3 className="text-[18px] font-bold mt-4 pb-1 uppercase text-black" style={previewStyle}>SKILLS</h3>
        <div className="flex flex-wrap justify-start my-5">
          {previewData.skills.map((skill, index) => (
            <div key={index} className="text-black px-4 py-2 mx-2 my-2 flex items-center text-[15px]" style={previewStyle}>
              <FontAwesomeIcon icon={faCircle} className="mr-2 size-2" />
              <p className="mr-2">{skill}</p>
            </div>
          ))}
        </div>
      </div>
      
      <h3 className="text-[18px] font-bold mt-4 pb-1 uppercase text-black px-3" style={previewStyle}>PROJECTS</h3>
      <div className="px-3">
        {previewData.projects.map((proj, index) => (
          <div key={index} className="flex flex-col justify-between my-2">
            <p className="font-bold" style={previewStyle}>{proj.projectTitle + " (" + proj.startDate + "-" + proj.endDate + ")"}</p>
            <p className="my-3 text-justify" style={previewStyle}>{proj.description}</p>
          </div>
        ))}
      </div>
      
      <div className="absolute right-8 bottom-20 transform translate-x-[-40%] translate-y-[-40%] bg-[#e7ef71] h-[25px] w-[25px] rounded-full"></div>
      <div className="absolute right-10 bottom-20 transform translate-x-[-40%] translate-y-[-40%] bg-[#89daf1] h-[60px] w-[60px] rounded-full"></div>
    </div>
  );
  
};

export default ResumePreview;
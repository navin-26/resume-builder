import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faCircle } from '@fortawesome/free-solid-svg-icons';

const ResumePreview = ({ data }) => {
  const defaultData = {
    fname: 'John',
    lname: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    city: 'New York',
    state: 'NY',
    summary: `Detail-oriented software developer with 7 years of experience in full-stack development. Proficient in Java, Python, and React, with a passion for building scalable web applications.`,
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
    textColor: '#000000', // Default text color
  fontStyle: 'sans' // Default font style
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
    textColor: data.textColor || defaultData.textColor, // Uses the selected text color or default
    fontStyle: data.fontStyle || defaultData.fontStyle // Uses the selected font style or default
    
  };

  // Apply color and font style to the entire preview
  const previewStyle = {
    color: previewData.textColor,
    fontFamily: previewData.fontStyle
  };

  return (
    <div className='border lg:h-[11.69in] lg:w-[8.27in] sm:h-[325px] sm:w-[215px] md:h-[850px] md:w-[550px] lg:p-12 md:p-5  sm:p-3 lg:py-14 md:py-6 sm:py-4 rounded bg-white font-sans md:text-sm mx-auto overflow-hidden text-black lg:text-[15px] md:text-[12px] sm:text-[6px] font-medium' style={previewStyle}>
      <div className='flex flex-row justify-between md:space-x-14 sm:space-x-9 lg:py-10 md:py-5 sm:py-0 px-3 border-b border-gray-800'>
        <div className='flex flex-col md:gap-4 sm:gap-[2px] lg:text-[40px] md:text-[25px] sm:text-[12px]   '>
          <h2 className=" font-bold uppercase md:mb-2 ">{previewData.fname}</h2>
          <h2 className="font-bold uppercase md:mb-5 sm:mb-[2px]">{previewData.lname}</h2>
        </div>
        <div className='flex flex-col '>
          <p className=" flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            {previewData.city + ", " + previewData.state}
          </p>
          <p className=" flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            {previewData.phone}
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            {previewData.email}
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-between md:px-3 md:mt-2 sm:mt-[4px]  border-b border-gray-800'>
        <h2 className='font-bold lg:text-[18px] md:text-[14px] sm:text-[8px] md:mb-4 sm:mb-2 bg-blue-100 md:p-2 rounded'>ABOUT ME</h2>
        <p className="md:mb-4 mb-1">{previewData.summary}</p>
      </div>

      <div className='flex flex-row mt-1 md:px-3 border-b border-gray-800'>
        <div className='w-1/2 '>
          <h3 className="lg:text-[18px] md:text-[14px] sm:text-[8px] font-bold md:my-3 md:py-3 uppercase text-black bg-blue-100 " style={previewStyle}>EXPERIENCE</h3>
          {previewData.experience.map((exp, index) => (
            <div key={index} className="md:my-3 my-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex-1">
                  <p className="font-bold md:mb-2 mb-[2px]">{exp.companyName}</p>
                  <p className="md:mb-2 mb-[2px]">{exp.position}</p>
                  <p className="font-bold">{exp.startDate} - {exp.endDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='w-1/2'>
          <h3 className="lg:text-[18px] md:text-[14px] sm:text-[8px] font-bold md:my-3 md:py-3 uppercase text-black bg-blue-100" style={previewStyle}>EDUCATION</h3>
          {previewData.education.map((edu, index) => (
            <div className="flex flex-row items-center md:mb-4 my-1" key={index}>
              <div>
                <p className="font-bold uppercase">{edu.institute}</p>
                <p className="md:mt-2 mb-[2px] uppercase">{edu.degree + " " + edu.specialization}</p>
                <p className="font-bold mb-[2px]">{edu.startDate} - {edu.endDate}</p>
                <span>{edu.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-gray-800 md:px-3">
        <h3 className="lg:text-[18px] md:text-[14px] sm:text-[8px] font-bold md:mt-4 mt-1 md:pb-1 uppercase text-black bg-blue-100" style={previewStyle}>SKILLS</h3>
        <div className="flex flex-wrap justify-start md:my-5 my-1">
          {previewData.skills.map((skill, index) => (
            <div key={index} className="text-black md:px-4 md:py-2 md:mx-2 md:my-2 flex items-center md:text-[15px] sm:text-[5px] " style={previewStyle}>
              <FontAwesomeIcon icon={faCircle} className="md:mr-2 mr-1" />
              <p className="md:mr-2 mr-1">{skill}</p>
            </div>
          ))}
        </div>
      </div>

      <h3 className="lg:text-[18px] md:text-[14px] text-[7px] font-bold md:mt-4 mt-1 md:pb-1 uppercase text-black md:px-3 bg-blue-100" style={previewStyle}>PROJECTS</h3>
      <div className="md:px-3">
        {previewData.projects.map((proj, index) => (
          <div key={index} className="flex flex-col justify-between md:my-2 my-[2px]">
            <p className="font-bold">{proj.projectTitle + " (" + proj.startDate + " - " + proj.endDate + ")"}</p>
            <p className="md:my-3 my-1 text-justify">{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumePreview;
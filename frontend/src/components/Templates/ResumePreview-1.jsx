import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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
    textColor: '#000000', // Default text color
  fontStyle: 'Arial, sans-serif' // Default font style
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
    <div className="border p-8 rounded bg-white font-sans text-sm mx-auto overflow-hidden h-[1000px]">
      <div className="bg-gray-100 p-6 rounded-t">
        <h2 className="text-3xl font-bold uppercase mb-2 text-center" style={previewStyle}>{`${previewData.fname} ${previewData.lname}`}</h2>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
          <p className="text-lg flex items-center" style={previewStyle}>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            {previewData.email}
          </p>
          <p className="text-lg flex items-center" style={previewStyle}>
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            {previewData.phone}
          </p>
          <p className="text-lg flex items-center" style={previewStyle}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            {`${previewData.city}, ${previewData.state}`}
          </p>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 uppercase text-gray-700 " style={previewStyle}>Summary</h3>
        <p className="mb-6" style={previewStyle}>{previewData.summary}</p>

        <h3 className="text-xl font-bold mb-4 uppercase text-gray-700 border-t border-violet-950 py-4" style={previewStyle}>Education</h3>
        {previewData.education.map((edu, index) => (
          <div key={index} className="mb-4" style={previewStyle}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="flex-1">
                <p className="font-bold uppercase">{edu.institute}</p>
                <p className="mt-1 uppercase">{`${edu.degree} - ${edu.specialization}`}</p>
              </div>
              <div className="flex-1 text-center">
                <p className="">{edu.percentage}%</p>
              </div>
              <div className="flex-1 text-center">
                <p className="font-bold">{edu.startDate} - {edu.endDate}</p>
              </div>
            </div>
          </div>
        ))}

        <h3 className="text-xl font-bold mb-4 uppercase text-gray-700 border-t border-violet-950 py-4" style={previewStyle}>Experience</h3>
        {previewData.experience.map((exp, index) => (
          <div key={index} className="mb-4" style={previewStyle}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="flex-1">
                <p className="font-bold">{exp.companyName}</p>
              </div>
              <div className="flex-1">
                <p className="">{exp.position}</p>
              </div>
              <div className="flex-1 text-center">
                <p className="font-bold">{exp.startDate} - {exp.endDate}</p>
              </div>
            </div>
          </div>
        ))}

        <h3 className="text-xl font-bold mb-4 uppercase text-gray-700 border-t border-violet-950 py-4" style={previewStyle}>Skills</h3>
        <div className="flex flex-wrap justify-start mb-6">
          {previewData.skills.map((skill, index) => (
            <div key={index} className="bg-gray-200 rounded-full px-4 py-2 mr-2 mb-2 flex items-center" style={previewStyle}>
              <p className="mr-2">{skill}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-4 uppercase text-gray-700 border-t border-violet-950 py-4" style={previewStyle}>Projects</h3>
        {previewData.projects.map((proj, index) => (
          <div key={index} className="mb-4" style={previewStyle}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="flex-1 uppercase">
                <p className="font-bold">{proj.projectTitle}</p>
              </div>
              <div className="flex-1 text-wrap text-center">
                <p className="">{proj.description}</p>
              </div>
              <div className="flex-1 text-center">
                <p className="font-bold">{proj.startDate} - {proj.endDate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumePreview;

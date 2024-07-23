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
    summary: `Highly organized and self-motivated unique storyteller seeks the position of Xyz (name of the field) journalist. Bringing excellent verbal and written communication skills with two years of experience working in a multimedia environment. Ability to deliver promotable and compelling stories to the company's website and social media platforms`,
    
    education: [
      {
        schoolName: 'Hogwarts University',
        degree: 'B.Sc.',
        branch: 'Computer Science',
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
        projectName: 'Resume Builder',
        description: 'A web application to build resumes.'
      }
    ]
  };

  const previewData = {
    fname: data.fname || defaultData.fname,
    lname: data.lname || defaultData.lname,
    email: data.email || defaultData.email,
    phone: data.phone || defaultData.phone,
    city: data.city || defaultData.city,
    state: data.state || defaultData.state,
    summary: data.summary || defaultData.summary,
    education: data.education.length ? data.education : defaultData.education,
    experience: data.experience.length ? data.experience : defaultData.experience,
    skills: data.skills.length ? data.skills : defaultData.skills,
    projects: data.projects.length ? data.projects : defaultData.projects
  };

  return (
    <div className="border p-12 py-14 rounded bg-white font-sans text-sm w-[8.27in] h-[11.69in] mx-auto overflow-hidden text-gray-800 text-[15px] font-medium">
      <div className="text-center mb-6 border-b pb-4 border-purple-950 text-purple-900">
        <h2 className="text-[40px] font-bold uppercase mb-5">{`${previewData.fname} ${previewData.lname}`}</h2>
        <div className="flex flex-col md:flex-row md:justify-center md:items-center space-y-2 md:space-y-0 md:space-x-4 text-black">
          <p className="text-lg flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            {previewData.email}
          </p>
          <p className="text-lg flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            {previewData.phone}
          </p>
          <p className="text-lg flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            {`${previewData.city}, ${previewData.state}`}
          </p>
        </div>
      </div>

      <h3 className="text-xl mt-3 pb-2 uppercase text-purple-950 font-bold">SUMMARY</h3>
      <p className=" mb-4">{previewData.summary}</p>
      
      <h3 className="text-xl font-bold my-6 pt-4 uppercase border-t border-purple-950 text-purple-950">EDUCATION</h3>
      {previewData.education.map((edu, index) => (
        <div key={index} className="mt-2">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex-1">
              <p className=" font-medium">{edu.schoolName}</p>
              <p className=" mt-2">{`${edu.degree} - ${edu.branch}`}</p>
            </div>
            <div className="flex-1 text-center">
              <p className="">{edu.percentage}%</p>
            </div>
            <div className="flex-1 text-center">
              <p className=" font-medium">{edu.startDate} - {edu.endDate}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="border-b pb-4 mb-4"></div>

      <h3 className="text-xl font-bold my-4 border-t pb-1 pt-6 border-purple-950 uppercase text-purple-950">EXPERIENCE</h3>
      {previewData.experience.map((exp, index) => (
        <div key={index} className="mt-2">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex-1">
              <p className=" font-medium">{exp.companyName}</p>
           
            </div>
            <div className="flex-1">
            
              <p className="">{exp.position}</p>
            </div>
            <div className="flex-1 text-center">
              <p className=" font-medium">{exp.startDate} - {exp.endDate}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="border-b pb-4 mb-4 border-purple-950"></div>

      <h3 className="text-xl font-bold mt-4 pb-1 uppercase text-purple-950">SKILLS</h3>
      <p className="">{previewData.skills.join(', ')}</p>
      <div className="border-b pb-4 mb-4 border-purple-950"></div>

      <h3 className="text-xl font-bold mt-4 border-b pb-1 uppercase text-purple-950">PROJECTS</h3>
      {previewData.projects.map((proj, index) => (
        <div key={index} className="mt-2">
          <p className="">{proj.projectName}</p>
          <p className="">{proj.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ResumePreview;

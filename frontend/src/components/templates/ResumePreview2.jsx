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
    summary: "Highly organized and self-motivated unique storyteller, Bringing excellent verbal and written communication skills with two years of experience working in a multimedia environment. Ability to deliver promotable and compelling stories to the company's website and social media platforms",
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
        projectName: 'Resume Builder',
        description: 'A web application to build resumes built using MERN.',
        startDate: '2022',
        endDate: '2024'
      }
    ]
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

  const previewData = {
    fname: data.fname || defaultData.fname,
    lname: data.lname || defaultData.lname,
    email: data.email || defaultData.email,
    phone: data.phone || defaultData.phone,
    city: data.city || defaultData.city,
    state: data.state || defaultData.state,
    summary: data.summary || defaultData.summary,
    education: data.education.length ? mergeEducationData(data.education, defaultData.education) : defaultData.education,
    experience: data.experience.length ? data.experience : defaultData.experience,
    skills: data.skills.length ? Array.from(new Set(data.skills)) : defaultData.skills,
    projects: data.projects.length ? data.projects : defaultData.projects
  };

  return (
    <div className="border w-[8.27in] h-[11.69in] p-12 py-14 rounded bg-white font-sans text-sm mx-auto overflow-hidden text-gray-800 text-[15px] font-medium">
      <div className="flex flex-col gap-1.5 mb-2 pb-4 border-b border-purple-950 text-purple-900">
        <h2 className="text-[40px] font-bold uppercase mb-5">{previewData.fname +" " + previewData.lname}</h2>
        <div className="flex flex-row justify-evenly mb-2 space-y-2 md:space-y-0 md:space-x-4 text-black">
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
            {previewData.city + ", " + previewData.state}
          </p>
        </div>
        <div className="text-black">
            <p className="indent-20 text-justify">{previewData.summary}</p>
        </div>
      </div>
      
      <div className="flex flex-row">
        <div className="w-1/4 border-r border-purple-950 pr-4 mr-4">
            <h3 className="text-[18px] font-bold mt-4 pb-1 uppercase text-purple-950">SKILLS</h3>
            <div className="flex flex-wrap justify-start my-5">
                {previewData.skills.map((skill, index) => (
                <div key={index} className="bg-black text-white rounded-full px-4 py-2 mx-2 my-2 flex items-center">
                    <p className="mr-2">{skill}</p>
                </div>
                ))}
            </div>
        </div>
        <div className="w-3/4 pl-5">
            <h3 className="text-[18px] font-bold my-4 uppercase border-purple-950 text-purple-950">EDUCATION</h3>
            <div className="mb-5">
                {previewData.education.map((edu, index) => (
                    <div className="flex flex-row md:items-center mb-4" key={index}>
                        <div className="flex text-center w-1/3">
                            <p className="font-bold">{edu.startDate} - {edu.endDate}</p>
                        </div>
                        <div className="flex flex-col w-2/3">
                            <p className="font-bold uppercase">{edu.institute}</p>
                            <p className="mt-2 uppercase">{edu.degree + " " + edu.specialization}</p>
                            <p className="">{edu.percentage}%</p>
                        </div>
                    </div>
                ))}
            </div>

            <h3 className="text-[18px] font-bold mt-4 pb-1 uppercase text-purple-950">PROJECTS</h3>
            <div className="">
                {previewData.projects.map((proj, index) => (
                    <div key={index} className="flex flex-col justify-between my-2">
                        <p className="font-bold">{proj.projectName + " (" + proj.startDate + "-" + proj.endDate + ")"}</p>
                        <p className="my-3 text-justify">{proj.description}</p>
                    </div>
                ))}
            </div>

            <h3 className="text-[18px] font-bold my-3 py-3 border-purple-950 uppercase text-purple-950">EXPERIENCE</h3>
            {previewData.experience.map((exp, index) => (
                <div key={index} className="my-3">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="flex-1">
                        <p className="font-bold">{exp.companyName}</p>
                        <p className="">{exp.position}</p>
                    </div>
                    <div className="flex-1 text-center">
                    <p className="font-bold">{exp.startDate} - {exp.endDate}</p>
                    </div>
                </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
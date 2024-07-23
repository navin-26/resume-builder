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
    <div className="border w-[8.27in] h-[11.69in] pl-12 py-10 rounded bg-white font-sans text-sm mx-auto overflow-hidden text-gray-800 text-[15px] font-medium" style={{color:'#313c4e'}}>
      <div className="flex flex-col gap-1.5 mb-2 p-4 text-white" style={{backgroundColor:"#313c4e"}}>
        <h2 className="text-[40px] font-bold uppercase mb-5">{previewData.fname +" " + previewData.lname}</h2>
        <div className="w-48 border-b-2 border-white-950"></div>
        <div className="">
            <p className="text-justify">{previewData.summary}</p>
        </div>
      </div>
      
      <div className="flex flex-row pr-12">
        <div className="w-1/4 pr-4 mt-4">
            <div className="flex flex-col justify-evenly mb-8 gap-2">
                <p className="text-base flex flex-col items-start gap-2" style={{wordBreak:'break-word', overflowWrap:'break-word'}}>
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    {previewData.email}
                </p>
                <p className="text-base flex flex-col items-start gap-2">
                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                    {previewData.phone}
                </p>
                <p className="text-base flex flex-col items-start gap-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                    {previewData.city + ", " + previewData.state}
                </p>
            </div>
            <h3 className="text-[18px] font-bold mt-4 pb-1 uppercase text-purple-950">SKILLS</h3>
            <div className="flex flex-wrap content-start my-5">
                {previewData.skills.map((skill, index) => (
                <div key={index} className="text-white rounded-lg p-2 m-1 flex" style={{backgroundColor:'#989da6'}}>
                    <p className="mr-2 text-base">{skill}</p>
                </div>
                ))}
            </div>
        </div>
        <div className="w-3/4">
            <h3 className="text-[18px] font-bold my-4 uppercase pl-4 pb-2" style={{borderBottom:'2px Solid #313c4e'}}>EDUCATION</h3>
            <div className="mb-5">
                {previewData.education.map((edu, index) => (
                    <div className="flex flex-row md:items-end mb-4 pl-4" key={index}>
                        <div className="flex flex-col text-start w-2/3">
                            <p className="text-lg font-bold">{edu.degree + " " + edu.specialization}</p>
                            <p className="text-lg">{edu.institute}</p>
                            <p className="text-xs">{edu.startDate} - {edu.endDate}</p>
                        </div>
                        <div className="w-1/3 flex justify-end">
                            <p className="text-xs">{edu.percentage}%</p>
                        </div>
                    </div>
                ))}
            </div>

            <h3 className="text-[18px] font-bold mt-4 pl-4 pb-2 uppercase" style={{borderBottom:'2px Solid #313c4e'}}>PROJECTS</h3>
            <div className="pl-4">
                {previewData.projects.map((proj, index) => (
                    <div key={index} className="flex flex-col justify-between my-2">
                        <p className="font-bold">{proj.projectName + " (" + proj.startDate + "-" + proj.endDate + ")"}</p>
                        <p className="my-3 text-justify indent-8">{proj.description}</p>
                    </div>
                ))}
            </div>

            <h3 className="text-[18px] font-bold my-3 py-3 uppercase" style={{borderBottom:'2px Solid #313c4e'}}>EXPERIENCE</h3>
            <div className="pl-4 flex flex-col gap-2">
                {previewData.experience.map((exp, index) => (
                    <div className="flex flex-row" key={index}>
                        <div className="flex-1">
                            <p className="font-bold">{exp.companyName}</p>
                            <p className="">{exp.position}</p>
                        </div>
                        <div className="flex items-center justify-end flex-wrap">
                            <p className="font-bold">{exp.startDate} - {exp.endDate}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
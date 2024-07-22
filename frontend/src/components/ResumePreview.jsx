import React from 'react';

const ResumePreview = ({ data }) => {
  const defaultData = {
    fname: 'John',
    lname: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    city: 'New York',
    state: 'NY',
    education: [
      {
        schoolName: 'XYZ University',
        degree: 'B.Sc. Computer Science',
        startDate: '2018',
        endDate: '2022'
      }
    ],
    experience: [
      {
        companyName: 'ABC Corp',
        position: 'Software Developer',
        startDate: '2022',
        endDate: 'Present'
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
    education: data.education.length ? data.education : defaultData.education,
    experience: data.experience.length ? data.experience : defaultData.experience,
    skills: data.skills.length ? data.skills : defaultData.skills,
    projects: data.projects.length ? data.projects : defaultData.projects
  };

  return (
    <div className="border p-6 rounded bg-white font-serif text-sm h-[1100px] overflow-hidden text-gray-800">
      <h2 className="text-2xl font-bold">{`${previewData.fname} ${previewData.lname}`}</h2>
      <p className="text-lg">{previewData.email}</p>
      <p className="text-lg">{previewData.phone}</p>
      <p className="text-lg">{`${previewData.city}, ${previewData.state}`}</p>
      <h3 className="text-xl font-semibold mt-4">Education</h3>
      {previewData.education.map((edu, index) => (
        <div key={index} className="mt-2">
          <p className="text-lg">{edu.schoolName}</p>
          <p className="text-lg">{edu.degree}</p>
          <p className="text-lg">{edu.startDate} - {edu.endDate}</p>
        </div>
      ))}

      <h3 className="text-xl font-semibold mt-4">Experience</h3>
      {previewData.experience.map((exp, index) => (
        <div key={index} className="mt-2">
          <p className="text-lg">{exp.companyName}</p>
          <p className="text-lg">{exp.position}</p>
          <p className="text-lg">{exp.startDate} - {exp.endDate}</p>
        </div>
      ))}

      <h3 className="text-xl font-semibold mt-4">Skills</h3>
      <p className="text-lg">{previewData.skills.join(', ')}</p>

      <h3 className="text-xl font-semibold mt-4">Projects</h3>
      {previewData.projects.map((proj, index) => (
        <div key={index} className="mt-2">
          <p className="text-lg">{proj.projectName}</p>
          <p className="text-lg">{proj.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ResumePreview;

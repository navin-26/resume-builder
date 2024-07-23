import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ExperienceInfo = () => {
  const [data, setData] = useState({
    experiences: [
      {
        companyName: '',
        jobTitle: '',
        startDate: '',
        endDate: '',
        summary: ''
      }
    ]
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperiences = data.experiences.map((experience, i) =>
      i === index ? { ...experience, [name]: value } : experience
    );
    setData({ ...data, experiences: updatedExperiences });
  };

  const addExperience = () => {
    if (data.experiences.length < 3) {
      setData({
        ...data,
        experiences: [
          ...data.experiences,
          {
            companyName: '',
            jobTitle: '',
            startDate: '',
            endDate: '',
            summary: ''
          }
        ]
      });
    }
  };

  const deleteExperience = (index) => {
    const updatedExperiences = data.experiences.filter((_, i) => i !== index);
    setData({ ...data, experiences: updatedExperiences });
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>

      {data.experiences.length < 3 && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={addExperience}
            className="bg-black border-2 border-yellow-500 text-white py-2 px-4 font-bold mb-5 hover:bg-yellow-500 hover:text-black"
          >
            Add
          </button>
        </div>
      )}
      {data.experiences.map((experience, index) => (
        <div key={index} className="grid grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <label className="block">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={experience.companyName}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border rounded bg-black text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={experience.jobTitle}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border rounded bg-black text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={experience.startDate || ''}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border rounded bg-white text-black date-input"
            />
          </div>
          <div className="mb-4">
            <label className="block">End Date</label>
            <input
              type="date"
              name="endDate"
              value={experience.endDate || ''}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border rounded bg-white text-black date-input"
            />
          </div>
          
          {data.experiences.length > 1 && (
            <div className="col-span-2 flex justify-end">
              <button
                type="button"
                onClick={() => deleteExperience(index)}
                className="bg-transparent text-white hover:text-red-600 p-2 rounded"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceInfo;

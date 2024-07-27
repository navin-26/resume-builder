import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ExperienceInfo = ({ data, setData }) => {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperiences = data.experience.map((experience, i) => {
      if (i === index) {
        return { ...experience, [name]: value };
      }
      return experience;
    });
    setData({ ...data, experience: updatedExperiences });
  };

  const addExperience = () => {
    if (data.experience.length < 3) {
      setData({
        ...data,
        experience: [
          ...data.experience,
          {
            companyName: '',
            position: '',
            startDate: '',
            endDate: '',
          }
        ]
      });
    }
  };

  const deleteExperience = (index) => {
    const updatedExperiences = data.experience.filter((_, i) => i !== index);
    setData({ ...data, experience: updatedExperiences });
  };

  return (
    <div className="text-black animate-fadeInLeft">
      <h2 className="text-[26px] text-cyan-800  font-bold mb-4">Work Experience</h2>

      {data.experience.length < 3 && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={addExperience}
            className="bg-black border-2  text-white py-2 px-4 font-bold mb-5 hover:bg-yellow-500 hover:text-black"
          >
            Add
          </button>
        </div>
      )}
      {data.experience.map((experience, index) => (
        <div key={index} className="grid grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <label className="block">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={experience.companyName}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border-[3px] border-cyan-800 rounded bg-black text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block">Position</label>
            <input
              type="text"
              name="position"
              value={experience.position}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border-[3px] border-cyan-800 rounded bg-black text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block">Start Year</label>
            <input
              type="number"
              name="startDate"
              min="1900"
              max="2099"
              step="1"
              value={experience.startDate || ''}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border-[3px] border-cyan-800 rounded bg-white text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block">End Year</label>
            <input
              type="number"
              name="endDate"
              min="1900"
              max="2099"
              step="1"
              value={experience.endDate || ''}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border-[3px] border-cyan-800 rounded bg-white text-black"
            />
          </div>
        
          {data.experience.length > 1 && (
            <div className="col-span-2 flex justify-end">
              <button
                type="button"
                onClick={() => deleteExperience(index)}
                className="bg-transparent text-black hover:text-red-600 p-2 rounded"
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
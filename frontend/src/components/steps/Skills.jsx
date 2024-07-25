import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Skills = ({ data, setData }) => {
  const [skill, setSkill] = useState('');

  const handleInputChange = (e) => {
    setSkill(e.target.value);
  };

  const handleAddSkill = (e) => {
    if (e.key === 'Enter' && skill.trim()) {
      setData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, skill.trim()]
      }));
      setSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter(s => s !== skillToRemove)
    }));
  };

  return (
    <div className='text-black'>
      <h2 className="text-[26px] text-cyan-800  font-bold mb-4">Skills</h2>
      <div className='mb-4'>
        <label className="block">Enter a Skill</label>
        <input
          type="text"
          value={skill}
          onChange={handleInputChange}
          onKeyDown={handleAddSkill}
          className="w-full p-2 border-[3px] border-cyan-800 rounded bg-black text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block">Your Skills</label>
        <div className="flex flex-wrap">
          {data.skills.map((skill, index) => (
            <div
              key={index}
              className="bg-black text-white rounded-full px-4 py-2 mr-2 mb-2 flex items-center"
            >
              {skill}
              <FontAwesomeIcon
                icon={faTimes}
                className="ml-2 cursor-pointer"
                onClick={() => handleRemoveSkill(skill)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

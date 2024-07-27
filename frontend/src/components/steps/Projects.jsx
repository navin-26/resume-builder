import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ProjectInfo = ({ data, setData }) => {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    
    const updatedProjects = data.projects.map((project, i) => {
      if (i === index) {
        if (name === 'description') {
          return { ...project, [name]: value.slice(0, 70) }; 
        }

        return { ...project, [name]: value };
      }
      return project;
    });
    setData({ ...data, projects: updatedProjects });
  };

  const addProject = () => {
    if (data.projects.length < 3) {
      setData({
        ...data,
        projects: [
          ...data.projects,
          {
            projectTitle: '',
            startDate: '',
            endDate: '',
            description: ''
          }
        ]
      });
    }
  };

  const deleteProject = (index) => {
    const updatedProjects = data.projects.filter((_, i) => i !== index);
    setData({ ...data, projects: updatedProjects });
  };

  return (
    <div className="text-black animate-fadeInLeft">
      <h2 className="text-[26px] text-cyan-800  font-bold mb-4">Project Info</h2>

      {data.projects.length < 2 && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={addProject}
            className="bg-black border-2  text-white py-2 px-4 font-bold mb-5 hover:bg-yellow-500 hover:text-black"
          >
            Add
          </button>
        </div>
      )}
      {data.projects.map((project, index) => (
        <div key={index} className="grid grid-cols-2 gap-4 mb-4">
          <div className="mb-4 col-span-2">
            <label className="block">Project Title</label>
            <input
              type="text"
              name="projectTitle"
              value={project.projectTitle}
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
              value={project.startDate || ''}
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
              value={project.endDate || ''}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border-[3px] border-cyan-800 rounded bg-white text-black"
            />
          </div>
          <div className="mb-4 col-span-2">
            <label className="block">Description</label>
            <textarea
              name="description"
              value={project.description}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border-[3px] border-cyan-800 rounded bg-black text-white h-24"
              maxLength="70" // Enforce max length in the UI
            />
            {project.description.length === 70 && (
              <p className="text-red-500 text-sm">Description cannot exceed 70 characters</p>
            )}
          </div>
          {data.projects.length > 1 && (
            <div className="col-span-2 flex justify-end">
              <button
                type="button"
                onClick={() => deleteProject(index)}
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

export default ProjectInfo;
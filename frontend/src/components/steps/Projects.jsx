import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ProjectInfo = () => {
  const [data, setData] = useState({
    projects: [
      {
        projectTitle: '',
        startDate: '',
        endDate: '',
        summary: ''
      }
    ]
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProjects = data.projects.map((project, i) => {
      if (i === index) {
        if (name === 'summary') {
          return { ...project, [name]: value.slice(0, 70) }; // Limit summary to 70 characters
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
            summary: ''
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
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">Project Info</h2>

      {data.projects.length < 3 && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={addProject}
            className="bg-black border-2 border-yellow-500 text-white py-2 px-4 font-bold mb-5 hover:bg-yellow-500 hover:text-black"
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
              className="w-full p-2 border rounded bg-black text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={project.startDate || ''}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border rounded bg-white text-black date-input"
            />
          </div>
          <div className="mb-4">
            <label className="block">End Date</label>
            <input
              type="date"
              name="endDate"
              value={project.endDate || ''}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border rounded bg-white text-black date-input"
            />
          </div>
          <div className="mb-4 col-span-2">
            <label className="block">Summary</label>
            <textarea
              name="summary"
              value={project.summary}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border rounded bg-black text-white h-24"
              maxLength="70" // Enforce max length in the UI
            />
            {project.summary.length === 70 && (
              <p className="text-red-500 text-sm">Summary cannot exceed 70 characters</p>
            )}
          </div>
          {data.projects.length > 1 && (
            <div className="col-span-2 flex justify-end">
              <button
                type="button"
                onClick={() => deleteProject(index)}
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

export default ProjectInfo;

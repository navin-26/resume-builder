import React, { useState } from 'react';

const ProjectInfo = () => {
  const [data, setData] = useState({
    projects: [
      {
        summary: ''
      }
    ]
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProjects = data.projects.map((project, i) =>
      i === index ? { ...project, [name]: value } : project
    );
    setData({ ...data, projects: updatedProjects });
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">Career Objective</h2>

      {data.projects.map((project, index) => (
        <div key={index} className="grid grid-cols-2 gap-4 mb-4">
          <div className="mb-4 col-span-2">
            <label className="block">Summary</label>
            <textarea
              name="summary"
              value={project.summary}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border rounded bg-black text-white h-24"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectInfo;

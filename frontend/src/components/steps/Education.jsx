import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const EducationInfo = () => {
  const [data, setData] = useState({
    qualifications: [
      {
        institute: '',
        degree: '',
        specialization: '',
        cgpa: '',
        startDate: '',
        endDate: ''
      }
    ]
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedQualifications = data.qualifications.map((qualification, i) =>
      i === index ? { ...qualification, [name]: value } : qualification
    );
    setData({ ...data, qualifications: updatedQualifications });
  };

  const addQualification = () => {
    if (data.qualifications.length < 3) {
      setData({
        ...data,
        qualifications: [
          ...data.qualifications,
          {
            institute: '',
            degree: '',
            specialization: '',
            cgpa: '',
            startDate: '',
            endDate: ''
          }
        ]
      });
    }
  };

  const deleteQualification = (index) => {
    const updatedQualifications = data.qualifications.filter((_, i) => i !== index);
    setData({ ...data, qualifications: updatedQualifications });
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">Education Info</h2>

      {data.qualifications.length < 3 && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={addQualification}
            className="bg-black border-2 border-yellow-500 text-white py-2 px-4 font-bold mb-5 hover:bg-yellow-500 hover:text-black"
          >
            Add
          </button>
        </div>
      )}
      {data.qualifications.map((qualification, index) => (
        <div key={index} className="grid grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <label className="block">Institute Name</label>
            <input
              type="text"
              name="institute"
              value={qualification.institute}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border rounded bg-black text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block">Degree</label>
            <input
              type="text"
              name="degree"
              value={qualification.degree}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border rounded bg-black text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block">Specialization</label>
            <input
              type="text"
              name="specialization"
              value={qualification.specialization}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border rounded bg-black text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block">CGPA</label>
            <input
              type="text"
              name="cgpa"
              value={qualification.cgpa}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border rounded bg-black text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={qualification.startDate || ''}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border rounded bg-white text-black date-input"
            />
          </div>
          <div className="mb-4">
            <label className="block">End Date</label>
            <input
              type="date"
              name="endDate"
              value={qualification.endDate || ''}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border rounded bg-white text-black date-input"
            />
          </div>
          {data.qualifications.length > 1 && (
            <div className="col-span-2 flex justify-end">
              <button
                type="button"
                onClick={() => deleteQualification(index)}
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

export default EducationInfo;

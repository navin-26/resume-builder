import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const EducationInfo = ({ data, setData }) => {
  const handleChange = (e, index) => {
    const { name, value } = e.target;

    // Update the relevant field in the education data
    const updatedQualifications = data.education.map((qualification, i) =>
      i === index ? { ...qualification, [name]: value } : qualification
    );

    

    setData({ ...data, education: updatedQualifications });
  };

  const addQualification = () => {
    if (data.education.length < 3) {
      setData({
        ...data,
        education: [
          ...data.education,
          {
            institute: '',
            degree: '',
            specialization: '',
            startDate: '',
            endDate: '',
            percentage: ''
          }
        ]
      });
    }
  };

  const deleteQualification = (index) => {
    const updatedQualifications = data.education.filter((_, i) => i !== index);
    setData({ ...data, education: updatedQualifications });
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">Education Info</h2>

      {data.education.length < 3 && (
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
      {data.education.map((qualification, index) => (
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
            <label className="block">Percentage</label>
            <input
              type="text"
              name="percentage"
              value={qualification.percentage}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border rounded bg-black text-white"
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
              value={qualification.startDate || ''}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border rounded bg-white text-black"
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
              value={qualification.endDate || ''}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 border rounded bg-white text-black"
            />
          </div>
          {data.education.length > 1 && (
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
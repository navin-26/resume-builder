// frontend/src/components/steps/PersonalInfo.jsx
import React from 'react';

const PersonalInfo = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='text-white'>
      <h2 className="text-2xl font-bold mb-4">Personal Info</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block">First Name</label>
          <input
            type="text"
            name="fname"
            value={data.fname}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-black text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block">Last Name</label>
          <input
            type="text"
            name="lname"
            value={data.lname}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-black text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-black text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block">Phone</label>
          <input
            type="text"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-black text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block">City</label>
          <input
            type="text"
            name="city"
            value={data.city}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-black text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block">State</label>
          <input
            type="text"
            name="state"
            value={data.state}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-black text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
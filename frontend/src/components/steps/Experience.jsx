import React from 'react';

const Experience = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='text-white'>
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      <div className=''>
      <div className="mb-4">
        <label className="block">First Name</label>
        <input
          type="text"
          name="fname"
          value={data.fname}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block">Last Name</label>
        <input
          type="text"
          name="lname"
          value={data.lname}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block">Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block">Phone</label>
        <input
          type="text"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block">Address</label>
        <input
          type="text"
          name="address"
          value={data.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      </div>
    </div>
  );
};

export default Experience;

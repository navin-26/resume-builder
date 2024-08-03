import React from 'react';

const PersonalInfo = ({ data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  console.log(data);
  
  
  return (
    <div className='text-black'>
      <h2 className="text-[26px] text-cyan-800 font-bold mb-4 ">Personal Info</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block">First Name</label>
          <input
            type="text"
            name="fname"
            value={data.fname || ''}
            onChange={handleChange}
            className="w-full p-2 border-[3px] border-cyan-800 rounded bg-black text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block">Last Name</label>
          <input
            type="text"
            name="lname"
            value={data.lname || ''}
            onChange={handleChange}
            className="w-full p-2 border-[3px] border-cyan-800 rounded bg-black text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            value={data.email || ''}
            onChange={handleChange}
            className="w-full p-2 border-[3px] border-cyan-800 rounded bg-black text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block">Phone</label>
          <input
            type="text"
            name="phone"
            value={data.phone || ''}
            onChange={handleChange}
            className="w-full p-2 border-[3px] border-cyan-800 rounded bg-black text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block">City</label>
          <input
            type="text"
            name="city"
            value={data.city || ''}
            onChange={handleChange}
            className="w-full p-2 border-[3px] border-cyan-800 rounded bg-black text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block">State</label>
          <input
            type="text"
            name="state"
            value={data.state || ''}
            onChange={handleChange}
            className="w-full p-2 border-[3px] border-cyan-800 rounded bg-black text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;

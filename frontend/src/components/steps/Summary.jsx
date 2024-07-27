import React from 'react';

const Summary = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="text-black animate-fadeInLeft">
      <h2 className="text-2xl font-bold mb-4 text-[26px] text-cyan-800 ">Career Objective</h2>
      <div className="mb-4 col-span-2">
        <textarea
          name="summary"
          value={data.summary || ''}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-gray-200 text-black h-24 border-cyan-800"
          maxLength="300"
        />
        {data.summary && data.summary.length === 300 && (
          <p className="text-red-500 text-sm">Description cannot exceed 300 characters</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-white">Text Color</label>
        <input
          type="color"
          name="textColor"
          value={data.textColor}
          onChange={handleChange}
          className="w-full p-2 border border-cyan-800 rounded text-black cursor-pointer"
          style={{ height: '40px', width: '100%' }} // Improved styling
        />
      </div>

      <div className="mb-4">
        <label className="block">Font Style</label>
        <select
          name="fontStyle"
          value={data.fontStyle}
          onChange={handleChange}
          className="w-full p-2 border rounded text-black border-cyan-800"
        >
          <option value="Arial, sans-serif">Arial</option>
          <option value="Courier New, monospace">Courier New</option>
          <option value="Georgia, serif">Georgia</option>
          <option value="Times New Roman, serif">Times New Roman</option>
          <option value="Verdana, sans-serif">Verdana</option>
          <option value="Tahoma, sans-serif">Tahoma</option>
          <option value="Trebuchet MS, sans-serif">Trebuchet MS</option>
          <option value="Lucida Console, monospace">Lucida Console</option>
          <option value="Impact, sans-serif">Impact</option>
          <option value="Comic Sans MS, cursive">Comic Sans MS</option>
        </select>
      </div>
    </div>
  );
};

export default Summary;

const Summary = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">Career Objective</h2>
      <div className="mb-4 col-span-2">
        <label className="block">Summary</label>
        <textarea
          name="summary"
          value={data.summary || ''}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-black text-white h-24"
          maxLength="300"
        />
        {data.summary && data.summary.length === 300 && (
          <p className="text-red-500 text-sm">Description cannot exceed 300 characters</p>
        )}
      </div>
    </div>
  );
};

export default Summary;

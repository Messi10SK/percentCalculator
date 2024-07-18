// src/App.js
import React, { useState } from 'react';

const App = () => {
  const [originalValue, setOriginalValue] = useState('');
  const [newValue, setNewValue] = useState('');
  const [result, setResult] = useState(null);

  const handleOriginalValueChange = (e) => {
    setOriginalValue(e.target.value);
  };

  const handleNewValueChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const original = parseFloat(originalValue);
    const newV = parseFloat(newValue);

    if (!isNaN(original) && !isNaN(newV) && original !== 0) {
      const changeValue = newV - original;
      const percent = (changeValue / original) * 100;
      setResult(percent.toFixed(2));
    } else {
      setResult('Invalid input');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-300 p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Percentage Change Calculator</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Original Value:</label>
            <input
              type="number"
              value={originalValue}
              onChange={handleOriginalValueChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">New Value:</label>
            <input
              type="number"
              value={newValue}
              onChange={handleNewValueChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Calculate
          </button>
        </form>
        {result !== null && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold">Result: {result} %</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

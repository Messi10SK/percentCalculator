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
    <div>
      <h1>Percentage Change Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Original Value:</label>
          <input
            type="number"
            value={originalValue}
            onChange={handleOriginalValueChange}
            required
          />
        </div>
        <div>
          <label>New Value:</label>
          <input
            type="number"
            value={newValue}
            onChange={handleNewValueChange}
            required
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      {result !== null && (
        <div>
          <h2>Result: {result} %</h2>
        </div>
      )}
    </div>
  );
};

export default App;

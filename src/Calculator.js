import React from 'react';
import useStore from './useStore';

const Calculator = () => {
  const { buttons, result, updateResult, toggleDarkMode, darkMode } = useStore();

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        updateResult(eval(result)); // Replace with safer evaluation in production
      } catch (error) {
        updateResult('Error');
      }
    } else {
      updateResult(result === '0' ? value : result + value);
    }
  };

  return (
    <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <button
        onClick={toggleDarkMode}
        className="w-full p-2 mb-4 bg-gray-500 text-white rounded"
      >
        Toggle Dark Mode
      </button>
      <input
        type="text"
        value={result}
        readOnly
        className={`w-full text-right text-3xl p-4 mb-4 border rounded ${darkMode ? 'bg-gray-700 text-white border-gray-500' : 'bg-white text-black border-gray-300'}`}
      />
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => handleButtonClick(btn.value)}
            className="p-4 bg-blue-500 text-white rounded hover:bg-blue-400"
          >
            {btn.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

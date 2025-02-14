// src/App.js
import React, { useEffect } from 'react';
import Calculator from './Calculator';
import UndoRedo from './UndoRedo';
import useStore from './useStore';

function App() {
  const { darkMode, result, updateResult } = useStore();

  useEffect(() => {
    const savedResult = localStorage.getItem('calculatorResult');
    if (savedResult) {
      updateResult(savedResult);
    }
  }, [updateResult]);

  useEffect(() => {
    localStorage.setItem('calculatorResult', result);
  }, [result]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} flex justify-center items-center`}>
      <div className="w-full max-w-md">
        <UndoRedo />
        <Calculator />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import useStore from './useStore';

const UndoRedo = () => {
  const { undo, redo, history, historyIndex } = useStore();

  return (
    <div className="flex space-x-2">
      <button
        onClick={undo}
        className={`p-2 rounded ${historyIndex > 0 ? 'bg-gray-500 text-white hover:bg-gray-400' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        disabled={historyIndex === 0}
      >
        Undo
      </button>
      <button
        onClick={redo}
        className={`p-2 rounded ${historyIndex < history.length - 1 ? 'bg-gray-500 text-white hover:bg-gray-400' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        disabled={historyIndex >= history.length - 1}
      >
        Redo
      </button>
    </div>
  );
};

export default UndoRedo;

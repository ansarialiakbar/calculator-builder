import { create } from 'zustand';

const useStore = create((set) => ({
  buttons: [
    { id: 1, type: 'number', value: '1' },
    { id: 2, type: 'number', value: '2' },
    { id: 3, type: 'number', value: '3' },
    { id: 4, type: 'number', value: '4' },
    { id: 5, type: 'number', value: '5' },
    { id: 6, type: 'number', value: '6' },
    { id: 7, type: 'number', value: '7' },
    { id: 8, type: 'number', value: '8' },
    { id: 9, type: 'number', value: '9' },
    { id: 10, type: 'number', value: '0' },
    { id: 11, type: 'operation', value: '+' },
    { id: 12, type: 'operation', value: '-' },
    { id: 13, type: 'operation', value: '*' },
    { id: 14, type: 'operation', value: '/' },
    { id: 15, type: 'result', value: '=' },
  ],
  
  result: '0',
  history: ['0'],
  historyIndex: 0,
  darkMode: false,

  addButton: (button) => set((state) => ({ buttons: [...state.buttons, button] })),

  removeButton: (id) => set((state) => ({ buttons: state.buttons.filter((btn) => btn.id !== id) })),

  updateResult: (newResult) => set((state) => {
    // If a new value is added after undo, remove future history
    const newHistory = state.history.slice(0, state.historyIndex + 1);
    newHistory.push(newResult);

    return {
      result: newResult,
      history: newHistory,
      historyIndex: newHistory.length - 1, // Move index to latest
    };
  }),

  undo: () => set((state) => {
    if (state.historyIndex > 0) {
      return { 
        result: state.history[state.historyIndex - 1], 
        historyIndex: state.historyIndex - 1 
      };
    }
    return {};
  }),

  redo: () => set((state) => {
    if (state.historyIndex < state.history.length - 1) {
      return { 
        result: state.history[state.historyIndex + 1], 
        historyIndex: state.historyIndex + 1 
      };
    }
    return {};
  }),

  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useStore;

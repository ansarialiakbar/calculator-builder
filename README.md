##     Calculator Builder

## Overview

Calculator Builder is a React-based project that allows users to create a customizable calculator using drag-and-drop functionality. It features state management using Zustand and styling with Tailwind CSS. Users can perform calculations, enable dark mode, and use undo/redo functionality.

## Features

🖱️ Drag & Drop Components – Users can dynamically add and remove buttons.

🔢 Predefined Components – Includes numbers (0-9), operations (+, -, *, /), and result display.

📐 Custom Layout – Arrange calculator buttons as desired.

🧮 Calculation Logic – Fully functional calculator.

📦 State Management – Managed using Zustand.

🎨 Tailwind CSS Styling – Clean and responsive UI.

🌙 Dark Mode Toggle – Switch between light and dark themes.

💾 Persistent Storage – Saves calculator state in local storage.

🔄 Undo/Redo Functionality – Navigate between past actions.

## ## Setup Instructions

1. Clone the Repository

git clone https://github.com/yourusername/calculator-builder.git
cd calculator-builder

2. Install Dependencies

npm install

3. Start the Development Server

npm start

This will run the app in development mode. Open http://localhost:3000 in your browser.

4. Build for Production (Optional)

npm run build

This creates an optimized production build in the build/ folder.

## Project Structure

calculator-builder/
│── src/
│   ├
│   ├── Calculator.js
│   ├── UndoRedo.js
│   ├── useStore.js
│   ├── App.js
│   ├── index.js
│── public/
│── package.json
│── README.md

How to Use

Click number and operation buttons to perform calculations.

Press = to evaluate expressions.

Click "Undo" to revert the last action.

Click "Redo" to restore a reverted action.

Use "Toggle Dark Mode" to switch themes.

Your calculator layout and last result will persist on page reload.

## Technologies Used

React.js

Zustand (State Management)

Tailwind CSS (CDN-based)

Local Storage (Persistence)

## Contributing

Feel free to fork this project and submit a pull request if you'd like to improve it!

License

MIT License




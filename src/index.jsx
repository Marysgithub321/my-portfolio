import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import Tailwind CSS and other global styles
import App from './App'; // Import the main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Ensure this matches the ID in index.html
);

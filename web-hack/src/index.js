import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  // This imports the App component
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // React will render into this div
);

reportWebVitals();

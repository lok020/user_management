import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import User_management from './User_management';
import 'font-awesome/css/font-awesome.min.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <User_management />
  </React.StrictMode>
);
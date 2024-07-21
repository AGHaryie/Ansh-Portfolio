import React from 'react';
import './Loader.css'; // Import the CSS file for styling
import logo from '../assets/logo.png'; // Adjust the path as needed

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={logo} alt="Loading..." className="loader-image" />
    </div>
  );
};

export default Loader;

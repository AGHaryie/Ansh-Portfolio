// src/components/Home.js

import React from 'react';
import './Home.css';
import profileImage from '../assets/AnshProfile.png';
//import backgroundImage from '../assets/header.jpg'; // Import background image

const Home = () => {
  const downloadResume = () => {
      const url = 'https://drive.google.com/file/d/1FyFIxPgnPM4LlDpOh6IsmnrPdLMpzF9E/view?usp=sharing'; // Replace with the actual URL of your PDF file
      const link = document.createElement('a');
      link.href = url;
      link.download = 'resume.pdf'; // This sets the default name for the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      alert('I Love You Motallu');
  };

  return (
    <div className="home">
      <div className="overlay"></div>
      <div className="content">
        <div className="profile-container">
          <div className="profile">
            <img src={profileImage} alt="Profile" className="profile-image" />
            <div className="profile-text">
              <h1>Ansh Agrawal</h1>
              <p>Computer Science Engineering | Data Science</p>
            </div>
          </div>
        </div>
        <div className="bio">
          <p>
            A highly motivated Computer Science and Engineering student with a robust background in software development and a proven track record of academic excellence, seeking to leverage advanced technical skills and innovative problem-solving abilities in a challenging and growth-oriented professional environment.
          </p>
          <button className="resume-button" onClick={downloadResume}>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

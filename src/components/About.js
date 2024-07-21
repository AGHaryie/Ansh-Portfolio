import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      {/* <h1>About Me</h1> */}
      <div className="about-content">
        <div className="timeline">
          <h3>Education</h3>
          <ul>
            <li>
              <div className="timeline-content">
                <h4>Master of Technology in Computer Science with Specialization in Data Science</h4>
                <p>Indian Institute of Technology, Jammu, 2023 - 2025</p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h4>Bachelor of Technology in Computer Science Engineering</h4>
                <p>The Technilogical Institute of Textile & Sciences, Bhiwani, 2018 - 2022</p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h4>Higher Secondary Education</h4>
                <p>Vaish Model Sr. Sec. School, Bhiwani, 2016 - 2018</p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h4>Secondary Education</h4>
                <p>Career Planet Public School, 2005 - 2016</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="certifications">
          <h3>Certifications</h3>
          <ul>
            <li>
              <a href="https://drive.google.com/file/d/1pDkSonyUzRWY565SZASelZYGmsmbYuAd/view?usp=drive_link" download>React JS Certification</a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1RL08zIWZ1fS0xGUyttMU1BwdBCq6JnOJ/view?usp=drive_link" download>MATLAB Onramp Certification</a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1ZOQ67kX3N_LaQz1Ez3D9ZNQVDQVrWv3o/view?usp=drive_link" download>Android Applicatio Development Certification</a>
            </li>
          </ul>
        </div>
        <div className="technical-skills">
          <h3>Technical Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>BootStrap</li>
            <li>React</li>
          </ul>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Python</li>
            <li>Java</li>
            <li>Dart</li>
            <li>JavaScript</li>
          </ul>
          <ul>
            <li>Android Studio</li>
            <li>MySQL</li>
            <li>VS Code</li>
          </ul>
          <ul>
            <li>Data Structures & Algorithms</li>
            <li>Image Processing</li>
            <li>Machine Learning</li>
            <li>Natural Language Processing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

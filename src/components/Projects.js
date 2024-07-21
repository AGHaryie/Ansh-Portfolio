import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projects = [
  { title: 'TIT&S Student Portal Application', description: 'A comprehensive platform designed for students to manage academic records, access course materials, track attendance, and communicate with faculty.', link: '' },
  { title: 'Autonomous Vehicle Simulator', description: 'A robust platform for simulating autonomous vehicle behavior, testing algorithms, modeling traffic scenarios, and evaluating performance in various environments.', link: '' },
  { title: 'Note Making Application', description: 'A versatile app designed for creating, organizing, and syncing notes across devices, featuring rich text formatting, reminders, and collaboration tools.', link: '' },
  { title: 'Expenditure Monitoring & Storage', description: 'A comprehensive solution for tracking expenses, managing budgets, storing financial records, and generating detailed reports.', link: '' },
];

const Projects = () => {
  return (
    <div className="projects-wrapper">
      {/* <h2 className="projects-heading">Projects</h2> */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            description={project.description} 
            link={project.link} 
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

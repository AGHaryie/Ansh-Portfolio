import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div 
      className="project-card"
      onClick={() => window.open(link, "_blank")}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;

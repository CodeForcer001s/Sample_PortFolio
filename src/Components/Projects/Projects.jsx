import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Travel Blogs",
    description: "A Travel Blogging Application that helps regular wanderlust people document their journey. .",
  },
  {
    id: 2,
    title: "Gemini Clone",
    description: "An applicaation where you can talk with the Gemini AI developed and maintained by google.",
  },
  {
    id: 3,
    title: "Amazon UI clone",
    description: "Amazon.in main website's UI [of only the landing page]...",
  },
  {
    id: 4,
    title: "Todo List",
    description: "An application developed in react for demonstrating my basic react knowledge",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

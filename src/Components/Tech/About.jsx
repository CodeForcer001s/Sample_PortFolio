import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading">About Me</h1>
        <p className="about-description">
          Hello! I'm <span className="highlight-text">S Jeganath</span>, a student passionate about learning web development, Backend development
          and Essentially Full stack development. I want to specialize in creating and delivering Applications and shipping them to production speedily.
        </p>
        <button className="contact-btn">Contact Me</button>
      </div>
    </div>
  );
};

export default About;

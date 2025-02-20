import React from 'react';
import Title from './title';
import './projects.css';


function Projects() {
  return (
    <div className="projects-page">
      <Title text="projects" />
      {/* Other projects content */}
      <h2>Here is where you showcase your work.</h2>
    </div>
  );
}

export default Projects;
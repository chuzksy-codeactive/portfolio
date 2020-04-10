import React from 'react';
import project from '../data/project';

import '../styles/Project.scss';

const Project = () => (
  <div className="project">
    <div className="container">
      <div className="content">
        <h5>{project.name}</h5>
        <p>{project.details}</p>
        <p>{project.motivation}</p>
        <h5>What to learn</h5>
        <ul>
          {project.whatToLearn.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <h5>Resources</h5>
        <ul>
          {project.resources.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Project;

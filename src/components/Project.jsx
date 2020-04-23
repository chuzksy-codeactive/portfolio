import React from 'react';
import projects from '../data/project';

import '../styles/Project.scss';

const Content = ({ project }) => (
  <div className="content">
    <h5><strong>{project.name}</strong></h5>
    <p>{project.details}</p>
    <p>{project.motivation}</p>
    <ul>
      {project.features && project.features.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
    <p>
      <strong>Github link:</strong>
      <a target="_blank" href={project.github}>
        {' '}
        {project.github}
      </a>
    </p>
    {project.website && (
      <p>
        <strong>Website: </strong>
        <a target="_blank" href={project.website}>{project.website}</a>
      </p>
    )}
    <p><strong>Techonology Stack: </strong>React, Node.js, Express, MongoDb</p>
    {project.demo && <p><strong>Demo</strong></p>}
    {
      project.demo && (
        <div className="portfolio-play">
          <video autoPlay muted loop className="portfolio-video">
            <source src={project.demo} type="video/mp4" />
          </video>
        </div>
      )
    }
  </div>
);

const Project = () => (
  <div className="project">
    <div className="container">
      {
        projects.map((project, i) => <Content key={i} project={project} />)
      }
    </div>
  </div>
);

export default Project;
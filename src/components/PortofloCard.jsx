/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/PortfolioCard.scss';

const PortfolioCard = ({ data }) => (
  <div className="card-content">
    <img
      src={data.imgUrl}
      alt={data.name}
      className="card-img"
    />
    <h5>{data.name}</h5>
    <div className="tech-used">
      {
        data.tech.map((item, i) => <span className="badge badge-info" key={i}>{item}</span>)
      }
    </div>
    <div className="card-foot">
      <Link to={`/portfolio/${data.id}`}>More Info...</Link>
      <a href={data.githublink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  </div>
);

export default PortfolioCard;

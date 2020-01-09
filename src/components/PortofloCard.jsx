/* eslint-disable react/prop-types */
import React from 'react';

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
      <a href="#more">More Info...</a>
      <a href={data.githublink}>View on GitHub</a>
    </div>
  </div>
);

export default PortfolioCard;

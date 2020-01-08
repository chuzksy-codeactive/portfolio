import React from 'react';

import '../styles/PortfolioCard.scss';

const PortfolioCard = () => (
  <div className="portfolio-card">
    <div className="card-content">
      <img
        src="https://res.cloudinary.com/dcgwltbei/image/upload/v1578393397/Screenshot_2020-01-07_at_11.36.18.png"
        alt="EventCity"
        className="card-img"
      />
      <h5>EventCity</h5>
      <div className="tech-used">
        <span className="badge badge-info">React</span>
        <span className="badge badge-info">Redux</span>
        <span className="badge badge-info">NodeJS</span>
        <span className="badge badge-info">ExpressJS</span>
        <span className="badge badge-info">PostgresSQL</span>
        <span className="badge badge-info">Sequelize</span>
        <span className="badge badge-info">Selenium</span>
      </div>
      <div className="card-foot">
        <a href="#more">More Info...</a>
        <a href="#view">View on GitHub</a>
      </div>
    </div>
  </div>
);

export default PortfolioCard;

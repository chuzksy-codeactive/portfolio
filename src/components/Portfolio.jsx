import React from 'react';

import PortfolioCard from './PortofloCard';
import portfolio from '../data/portfolio';

import '../styles/Portfolio.scss';

const Portfolio = () => (
  <div className="portfolio">
    <div className="container">
      <h3 className="heading">Web Developer Portfolio</h3>
      <div className="portfolio-card">
        {
          portfolio.data.map((item) => (
            <PortfolioCard key={item.id} data={item} />
          ))
        }
      </div>
    </div>
  </div>
);

export default Portfolio;

import React from 'react';

import PortfolioCard from './PortofloCard';

import '../styles/Portfolio.scss';

const Portfolio = () => (
  <div className="portfolio">
    <div className="container">
    <h3>Web Developer Portfolio</h3>
    <PortfolioCard />
    </div>
  </div>
);

export default Portfolio;

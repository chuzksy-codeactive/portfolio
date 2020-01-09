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
    <div className="footer">
      <h3>Let&apos;s talk</h3>
      <p>
        Wanna get in touch or talk about a project?
        <br />
        Feel free to contact me via email at chuzksy@gmail.com
        <br />
        or drop a line in the form at the
        {' '}
        <strong>contact page</strong>
      </p>
    </div>
  </div>
);

export default Portfolio;

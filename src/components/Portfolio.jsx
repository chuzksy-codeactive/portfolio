import React from 'react';
import { Link } from 'react-router-dom';

import PortfolioCard from './PortofloCard';
import portfolio from '../data/portfolio';

import '../styles/Portfolio.scss';

const Portfolio = () => (
  <div className="portfolio">
    <div className="container">
      <h3 className="heading">Web Developer Portfolio</h3>
      <p className="sub-heading">From Frontend to Backend using React, Redux, NodeJS, .NET Core, SQL. Check out my web software development portfolio projects.</p>
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
        Want to get in touch or talk about a project?
        <br />
        Feel free to contact me via email at
        {' '}
        <a href="mailto:chuzksy@gmail.com">chuzksy@gmail.com</a>
        <br />
        or drop a message in the form at the
        {' '}
        <strong><Link to="/contact">contact page</Link></strong>
      </p>
    </div>
  </div>
);

export default Portfolio;

/* eslint-disable react/no-array-index-key */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';

import portfolio from '../data/portfolio';
import NotFound from './NotFound';

import '../styles/PortfolioDetails.scss';

const PortfolioDetails = (props) => {
  if (isNaN(props.match.params.id)) {
    return (
      <NotFound />
    );
  }

  const data = portfolio.data.find((item) => item.id.toString() === props.match.params.id);

  if (data == null || data === 'undefined') {
    return (
      <div className="undefined">
        <div className="container">
          <div className="alert alert-danger" role="alert">
            <strong>Oops sorry!</strong>
            <br />
            {' '}
            {`This portfolio: ${props.match.params.id} can't be found in the data store`}
          </div>
          <button type="button" className="back" onClick={() => props.history.goBack()}>Go Back</button>
        </div>
      </div>
    );
  }

  const resources = Object.keys(data.resources);
  const list = (
    <div className="details">
      <div className="container">
        <h3 className="heading">{data.name}</h3>
        <p className="subheading">EventCity is a desktop react javascript web application build on top of election framework</p>
        <div className="portfolio-play">
          <video autoPlay muted loop className="portfolio-video">
            <source src={data.videoUrl} type="video/mp4" />
          </video>
        </div>
        <h3 className="heading">About this project</h3>
        <p>
          {data.projectDetails}
        </p>
        <h3 className="heading">Technical Sheet</h3>
        <p>
          Code technologies I got involved with while working on this project
        </p>
        <ul>
          {
            data.tech.map((item, i) => (
              <li key={i}>{item}</li>
            ))
          }
        </ul>
        <h3 className="heading">Resources</h3>
        <ul>
          {
            resources.map((item, i) => (
              <li key={i}>
                {`${item.toUpperCase()}:`}
                {' '}
                <span><a target="_blank" rel="noopener noreferrer" href={data.resources[item]}>{data.resources[item]}</a></span>
              </li>
            ))
          }
        </ul>
        <div className="footer">
          <h3>Let&apos;s talk</h3>
          <p>
            Wanna get in touch or talk about a project?
            <br />
            Feel free to contact me via email at
            {' '}
            <a href="mailto:chuzksy@gmail.com" target="_blank" rel="noopener noreferrer">chuzksy@gmail.com</a>
            <br />
            or drop a line in the form at the
            {' '}
            <strong><Link to="/contact">contact page</Link></strong>
          </p>
        </div>
      </div>
    </div>
  );

  return list;
};

export default PortfolioDetails;

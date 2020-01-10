import React from 'react';
import { Link } from 'react-router-dom';

import portfolio from '../data/portfolio';

import '../styles/PortfolioDetails.scss';

const PortfolioDetails = () => (
  <div className="details">
    <div className="container">
      <h3 className="heading">Portfolio Details Here</h3>
      <p className="subheading">EventCity is a desktop react javascript web application build on top of election framework</p>
      <div className="portfolio-play">
        <video autoPlay muted loop className="portfolio-video">
          <source src="https://res.cloudinary.com/dcgwltbei/video/upload/v1578571546/sms-mp4.mp4" type="video/mp4" />
        </video>
      </div>
      <h3 className="heading">About this project</h3>
      <p>
        On this Open Source project I was responsible for the initial UI/UX architecture, structure, design and animations. The idea was to follow the 3 column UX trend of webchats like skype, hipchat, gitter and slack. Building upon that an Open Source alternative with similar functionalities.
        The UI/UX was conceived with a mobile first approach. So it would be possible to effortlessly launch it into any platform without making any changes to the main application.
      </p>
      <h3 className="heading">Technical Sheet</h3>
      <p>
        Code technologies I got involved with while working on this project
      </p>
      <div className="footer">
        <h3>Let&apos;s talk</h3>
        <p>
          Wanna get in touch or talk about a project?
          <br />
          Feel free to contact me via email at
          {' '}
          <a href="mailto:chuzksy@gmail.com">chuzksy@gmail.com</a>
          <br />
          or drop a line in the form at the
          {' '}
          <strong><Link to="/contact">contact page</Link></strong>
        </p>
      </div>
    </div>
  </div>
);

export default PortfolioDetails;

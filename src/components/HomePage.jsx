/* eslint-disable react/button-has-type */
import React from 'react';

import '../styles/Homepage.scss';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="homepagecontent">
    <div className="container">
      <div className="content">
        <div className="content-items">
          <img className="content-img" src="https://res.cloudinary.com/dcgwltbei/image/upload/v1579399709/painted_img.jpg" alt="passport" />
          <h1>Hi, I&apos;m Chika Onuchukwu</h1>
          <p>
            I am a Web Developer and a programmer living in Lagos,
            Nigeria.
            <br />
            I make web applications usually with NodeJS and .NET Core
          </p>
          <div className="btns">
            <button className="btn"><Link className="btn-link" to="/portfolio">Portfolio</Link></button>
            <button className="btn"><Link className="btn-link" to="/project">Current Projects</Link></button>
          </div>
        </div>
        <div className="footer-icons">
          <a href="https://linkedin.com/in/onuchukwu-chika" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin" />
          </a>
          <a href="https://github.com/chuzksy-codeactive" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github" />
          </a>
          <a href="https://twitter.com/chuzksy" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;

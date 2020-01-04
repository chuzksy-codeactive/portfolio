/* eslint-disable react/button-has-type */
import React from 'react';

import '../styles/Homepage.scss';

const HomePage = () => (
  <div className="homepagecontent">
    <div className="content">
      <h1>Hi, I'm Chika Onuchukwu</h1>
      <p>
        I am a Web Developer and a programmer living in Lagos,
        Nigeria.
        <br />
        I make web applications usually with NodeJS and .NET Core
      </p>
      <div className="btns">
        <button className="btn">Portfolio</button>
        <button className="btn">Startup Projects</button>
      </div>
    </div>
    <div className="footer-icons">
      <a href="#icons">
        <i className="fa fa-linkedin" />
      </a>
      <a href="#icons">
        <i className="fa fa-github" />
      </a>
      <a href="#icons">
        <i className="fa fa-twitter" />
      </a>
    </div>
  </div>
);

export default HomePage;

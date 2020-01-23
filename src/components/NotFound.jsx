/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/NotFound.scss';

const NotFound = () => (
  <div className="notfound">
    <div className="container">
      <div className="notfound-content">
        <h1 className="content-heading">Oops!</h1>
        <h4 className="content-subheading">404 - PAGE OF FOUND</h4>
        <p className="content-para">
          The page you are looking for might have been removed or is temporary unavailable.
        </p>
        <button className="notfound-btn"><Link className="btn-link" to="/">Go To HomePage</Link></button>
      </div>
    </div>
  </div>

);

export default NotFound;

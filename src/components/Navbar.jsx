// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => (

  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <Link to="/" className="navbar-brand">Chuzksy</Link>
    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ml-auto">
        <Link to="/portfolio" className="nav-item nav-link">Portfolio</Link>
        <Link to="/about" className="nav-item nav-link">About</Link>
        <Link to="/contact" className="nav-item nav-link">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

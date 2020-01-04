// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

import '../styles/Navbar.scss';

class Navbar extends Component {
  state = {
    isVisible: false
  }

  toggleNavbar = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
  };

  render() {
    const { isVisible } = this.state;
    return (
      <div className={`navbar ${!isVisible ? "" : "responsive"}`}>
        <a className="navbar-link" href="#chuzksy">Chuzksy</a>
        <a className="navbar-link" href="#about">About</a>
        <a className="navbar-link" href="#contact">Contact</a>
        <a className="navbar-link" href="#labs">Labs</a>
        <a href="#icons" className="icon" onClick={this.toggleNavbar}>
          <i className="fa fa-bars" />
        </a>
      </div>
    );
  }
}

export default Navbar;

// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';

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
      <div className={`nav-header${!isVisible ? "" : " responsive"}`}>
        <Link className="nav-header-link" to="/" onClick={this.toggleNavbar}>Chuzksy</Link>
        <Link className="nav-header-link" to="/about" onClick={this.toggleNavbar}>About</Link>
        <Link className="nav-header-link" to="/contact" onClick={this.toggleNavbar}>Contact</Link>
        <Link className="nav-header-link" to="/labs" onClick={this.toggleNavbar}>Labs</Link>
        <Link href="#icons" className="icon" onClick={this.toggleNavbar}>
          <i className="fa fa-bars" />
        </Link>
      </div>
    );
  }
}

export default Navbar;

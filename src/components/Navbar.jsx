// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    isActive: false
  }

  toggleActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isVisible
    }));
  };

  render() {
    const { isVisible } = this.state;
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link to="/" className="navbar-brand">Chuzksy</Link>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ml-auto">
            <Link to="/portfolio" className="nav-item nav-link" onClick={this.toggleActive}>Portfolio</Link>
            <Link to="/about" className="nav-item nav-link" onClick={this.toggleActive}>About</Link>
            <Link to="/contact" className="nav-item nav-link" onClick={this.toggleActive}>Contact</Link>
          </div>
        </div>
      </nav>
      // <div className={`nav-header${!isVisible ? "" : " responsive"}`}>
      //   <Link className="nav-header-link" to="/">Chuzksy</Link>
      //   <Link className="nav-header-link" to="/portfolio" onClick={this.toggleNavbar}>Portfolio</Link>
      //   <Link className="nav-header-link" to="/about" onClick={this.toggleNavbar}>About</Link>
      //   <Link className="nav-header-link" to="/contact" onClick={this.toggleNavbar}>Contact</Link>
      //   <Link href="#icons" className="icon" onClick={this.toggleNavbar}>
      //     <i className="fa fa-bars" />
      //   </Link>
      // </div>
    );
  }
}

export default Navbar;

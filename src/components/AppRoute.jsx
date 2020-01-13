import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Navbar from './Navbar';
import HomePage from './HomePage';
import Contact from './Contact';
import About from './About';
import Portfolio from './Portfolio';
import PortfolioDetails from './PortfolioDetails';
import Project from './Project';

const AppRoute = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/about" exact component={About} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/portfolio/:id" exact component={PortfolioDetails} />
      <Route path="/project" exact component={Project} />
    </Switch>
  </Router>
);

export default AppRoute;

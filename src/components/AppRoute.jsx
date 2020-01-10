import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Navbar from './Navbar';
import HomePage from './HomePage';
import Contact from './Contact';
import About from './About';
import Portfolio from './Portfolio';
import PortfolioDetails from './PortfolioDetails';

import '../styles/Index.scss';

const AppRoute = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/about" exact component={About} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/portfolio/:id" exact component={PortfolioDetails} />
    </Switch>
  </Router>
);

export default AppRoute;

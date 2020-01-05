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

import '../styles/Index.scss';

const AppRoute = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>
);

export default AppRoute;

import React from 'react';

import Navbar from './Navbar';
import HomePage from './HomePage';

import '../styles/Index.scss';
import '../styles/AppRoute.scss';

const AppRoute = () => (
  <div className="homepage">
    <Navbar />
    <HomePage />
  </div>
);

export default AppRoute;

/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import '../styles/Contact.scss';

const Contact = () => (
  <div className="form-container">
    <img src="https://res.cloudinary.com/dcgwltbei/image/upload/v1578225838/IMG_3006_passport.jpg" alt="passport" />
    <form className="container-form">
      <h5>Let's build something together! Or email me if you have any other question</h5>
      <div className="form-group">
        <div className="form-group">
          <label htmlFor="name">Fullname</label>
          <input type="text" className="form-control" id="name" placeholder="Enter full name here" />
        </div>
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="details">Additional details</label>
        <textarea className="form-control" id="details" rows="3" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
);

export default Contact;

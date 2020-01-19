/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import emailjs from 'emailjs-com';

import '../styles/Contact.scss';

class Contact extends Component {
  state = {
    error: false,
    isEmail: false,
    user_name: '',
    message: '',
    user_email: '',
    isLoading: false,
    showAlert: false,
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  resetForm = () => {
    this.setState(() => ({
      user_name: '',
      user_email: '',
      message: '',
      error: false,
      isEmail: false,
      isLoading: false,
    }));
  }

  handleOnSubmit = (e) => {
    const { user_name, user_email, message } = this.state;

    e.preventDefault();

    if (user_name === '' || message === '' || (user_email === '' || !this.isEmail(user_email))) {
      return this.setState({ error: true, isEmail: false });
    }

    this.setState(() => ({ error: false, isEmail: true, isLoading: true, showAlert: true }));

    let templateParams = {
      from_name: user_email,
      to_name: 'chuzksy@gmail.com',
      subject: `Message from ${user_name}`,
      message_html: message,
    };

    emailjs.send('onuchukwu_chika', 'template_kbZEtmau', templateParams, 'user_b3OirDE8rSmFg9obJvoKl')
      .then((result) => {
        this.resetForm();
        setTimeout(
          () => { this.setState({ showAlert: false }) },
          3000
        );
      }, (error) => {
        this.setState(() => ({ isLoading: false }));
      });

  }

  isEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    return (
      <div className="form-container">
        <div className="container form-content">
          <img src="https://res.cloudinary.com/dcgwltbei/image/upload/v1579397544/Painnt_200118202942.jpg" alt="passport" />
          <form className="container-form">
            <h5>Let&apos;s build something together! Or email me if you have any other question</h5>
            <div className="form-group">
              <div className="form-group">
                <label htmlFor="fullname">Fullname</label>
                <input
                  type="text"
                  className="form-control"
                  name="user_name"
                  onChange={this.handleOnChange}
                  id="fullname"
                  placeholder="Enter full name here" />
                {(this.state.error && !this.state.user_name) && <small className="error">Fullnname field must not be empty</small>}
              </div>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="user_email"
                className="form-control"
                id="email" aria-describedby="emailHelp"
                required
                onChange={this.handleOnChange}
                placeholder="Enter email" />
              {(this.state.error && (!this.state.user_email || !this.state.isEmail)) && <div className="error">Email field must not be empty</div>}
              <small id="emailHelp" className="form-text text-muted">We&apos;ll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="details">Additional details</label>
              <textarea
                className="form-control"
                name="message"
                id="details"
                onChange={this.handleOnChange}
                rows="3" />
              {(this.state.error && !this.state.message) && <div className="error">This field must not be empty</div>}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleOnSubmit}>Submit</button>
            {this.state.isLoading && <><i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
              <span className="sr-only">Loading...</span></>}
            {(this.state.showAlert && !this.state.isLoading) && <div className="alert alert-success" role="alert">
              Message successfully submitted
            </div>}
          </form>
        </div>
      </div >
    );
  }
}

export default Contact;

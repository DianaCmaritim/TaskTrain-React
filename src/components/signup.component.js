import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import Header from '../Header'
import '../Forms.css'

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      frontendError: '',
      backendError: '',
      registered: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong during registration');
      }
    })
    .then(data => {
      console.log(data);
      this.setState({ frontendError: '', backendError: '', registered: true });
    })
    .catch(error => {
      console.error(error);
      this.setState({ frontendError: 'Something went wrong during registration', backendError: error.message });
    });
  }


  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    if (this.state.registered) {
      return <Navigate to="/sign-in" />;
    }
    return (
      <div className='App'>
        <Header />
        <div className="auth-wrapper">
          <div className="auth-inner">
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
        {this.state.frontendError && <div className="alert alert-danger">{this.state.frontendError}</div>}
        {this.state.backendError && <div className="alert alert-danger">{this.state.backendError}</div>}
        <div className="mb-3">
          <label>Username</label>
          <input
            type="username"
            className="form-control"
            placeholder="Enter username"
            name="username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
      </div>
      </div>
      </div>
    )
  }
}

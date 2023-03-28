// Working code
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Header from '../Header'

export default function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  const handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:3000/users/login', {
  username: username,
  email: email,
  password: password
})
.then(response => {
  console.log(response);
  // do something with the response, such as saving the user information
  if (response.status === 200) {
    const id = response.data.id;
    localStorage.setItem('id', id);
    setIsLoggedIn(true);
  }
})


    // axios.post('http://localhost:3000/users/login', {
    //   username: username,
    //   email: email,
    //   password: password
    // })
    // .then(response => {
    //   console.log(response);
    //   // do something with the response, such as saving the user information
    //   if (response.status === 200) {
    //     const Id = response.data.Id;
    //     localStorage.setItem('Id', Id);
    //     setIsLoggedIn(true);
    //   }
    // })
    .catch(error => {
      console.log(error);
      setError('Invalid username/email or password');
    });
  }


  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (

    <div className="App">
      <Header/>
      <div className="auth-wrapper">
          <div className="auth-inner">
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <label>Email address or username</label>
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Enter email or username"
          value={username}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
    </div>
    </div>
    </div>
  );
}

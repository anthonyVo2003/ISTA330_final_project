import React, { useState } from 'react';
// A promise-based HTTP client that allows you to make requests to the backend server
import axios from 'axios';

const Login = ({onLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    // prevents the default form submission behavior, which would cause the page to reload.
    e.preventDefault();

    try {
      // It sends a POST request to the backend API (http://localhost:5000/api/auth/login) with the email and password values
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email, password
      });

      // Save token in localStorage, allowing it to be used in future API requests
      localStorage.setItem('token', response.data.token); 
      onLogin();
    } catch (error) {
      alert('Login failed: ' + error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

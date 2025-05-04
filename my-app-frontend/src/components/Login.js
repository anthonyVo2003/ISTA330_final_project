import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Login = ({ onLogin, onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', {
        email, password
      });
      localStorage.setItem('token', response.data.token);
      onLogin();
    } catch (error) {
      alert('Login failed: ' + error.response.data.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-form"
        style={{ padding: '40px', borderRadius: '15px', backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.05)', color: '#fff', maxWidth: '400px', width: '100%' }}
      >
        <h2 className="mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required className="form-input" />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required className="form-input" />
          <button type="submit" className="btn btn-success w-100 mt-3">Login</button>
        </form>

        {/* Switch Button */}
        <div className="text-center mt-3">
          <button 
            type="button" 
            onClick={onSwitch} 
            style={{ background: 'none', border: 'none', color: '#28a745', textDecoration: 'underline', cursor: 'pointer' }}
          >
            Don't have an account? Register
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

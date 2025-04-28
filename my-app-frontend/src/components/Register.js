import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Register = ({ onSwitch }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name, email, password
      });
      localStorage.setItem('token', response.data.token);
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed: ' + error.response.data.message);
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
        <h2 className="mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required className="form-input" />
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required className="form-input" />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required className="form-input" />
          <button type="submit" className="btn btn-success w-100 mt-3">Register</button>
        </form>

        {/* Switch Button */}
        <div className="text-center mt-3">
          <button 
            type="button" 
            onClick={onSwitch} 
            style={{ background: 'none', border: 'none', color: '#28a745', textDecoration: 'underline', cursor: 'pointer' }}
          >
            Already have an account? Login
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;

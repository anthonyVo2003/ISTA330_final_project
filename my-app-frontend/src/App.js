import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  const [page, setPage] = useState('register'); // Default to 'register'
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <Home />
      ) : page === 'register' ? (
        <>
          <Register onSwitch={() => setPage('login')} />
          {/* Button to switch to Login page directly */}
          <button onClick={() => setPage('login')}>Already have an account? Go to Login</button>
        </>
      ) : (
        <>
          <Login onLogin={() => setIsLoggedIn(true)} onSwitch={() => setPage('register')} />
          {/* Button to switch to Register page directly */}
          <button onClick={() => setPage('register')}>Don't have an account? Go to Register</button>
        </>
      )}
    </div>
  );
};

export default App;

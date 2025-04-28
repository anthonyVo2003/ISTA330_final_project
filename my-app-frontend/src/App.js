import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  const [page, setPage] = useState('register');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <Home />
      ) : page === 'register' ? (
        <Register 
          onSwitch={() => setPage('login')} 
          onLoginSuccess={() => setIsLoggedIn(true)} 
        />
      ) : (
        <Login 
          onSwitch={() => setPage('register')} 
          onLogin={() => setIsLoggedIn(true)} 
        />
      )}
    </div>
  );
};

export default App;

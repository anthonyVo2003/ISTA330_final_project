import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  const [showRegister, setShowRegister] = useState(true);

  return (
    <div>
      <nav>
        <button onClick={() => setShowRegister(true)}>Register</button>
        <button onClick={() => setShowRegister(false)}>Login</button>
      </nav>

      {showRegister ? <Register /> : <Login />}
    </div>
  );
};

export default App;


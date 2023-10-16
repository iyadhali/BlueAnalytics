'use client'

import React, { useContext,useState } from 'react';
import { useStore } from '../context/store';




const TestGlobalState: React.FC = () => {
  const isLogged = useStore((state) => state.isLogged);
  const setIsLogged = useStore((state) => state.setIsLogged);
  const authenticate = useStore((state) => state.authenticate);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    authenticate(username, password);
  };

  return (
    <div>
      {isLogged ? <p>You are logged in!</p> : <p>Please log in.</p>}
      <button onClick={() => setIsLogged(!isLogged)}>
        Toggle Login State
      </button>
      <div>
      {isLogged ? <p>You are logged in!</p> : <p>Please log in.</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>


    </div>

    
  );
};

export default TestGlobalState;










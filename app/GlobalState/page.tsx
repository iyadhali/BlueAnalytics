'use client'

import React, { useContext } from 'react';
import { useStore } from '../context/store';




const GlobalState: React.FC = () => {
  const isLogged = useStore((state) => state.isLogged);
  const setIsLogged = useStore((state) => state.setIsLogged);

  return (
    <div>
      {isLogged ? <p>You are logged in!</p> : <p>Please log in.</p>}

    </div>
  );
};

export default GlobalState;


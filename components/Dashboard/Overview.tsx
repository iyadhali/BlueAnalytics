"use client";
import React from "react";

import { useStore } from '@/app/context/store';



const Overview: React.FC = () => {
  const isLogged = useStore((state) => state.isLogged);
  const setIsLogged = useStore((state) => state.setIsLogged);
  return (
    <div>
       
      {isLogged ? <p>You are logged in!</p> : <p>Please log in.</p>}
      <button onClick={() => setIsLogged(!isLogged)}>
        Toggle Login State
      </button>
      <div></div>
      
    </div>
  );
};

export default Overview;

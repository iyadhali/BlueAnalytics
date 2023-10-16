'use client'
import React, { FC, ReactNode } from 'react';
import StoreContext from './context';
import useStore from './store';

export type StoreProviderProps = {
  children: ReactNode;
};

const AuthProvider: FC<StoreProviderProps> = ({ children }) => {
  const store = useStore();
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};

export default AuthProvider;






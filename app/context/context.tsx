// context.ts
'use client'
import { createContext } from 'react';
import { State } from "./store";

const StoreContext = createContext<State | undefined>(undefined);

export default StoreContext;



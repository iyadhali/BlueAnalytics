import {create} from 'zustand';


export type State = {
    isLogged: boolean;
    setIsLogged: (value: boolean) => void;
    authenticate: (username: string, password: string) => void;
  };
  
  export const useStore = create<State>((set) => ({
    isLogged: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('isLogged') || 'false') : false,
    setIsLogged: (value: boolean) => {
      localStorage.setItem('isLogged', JSON.stringify(value));
      set({ isLogged: value });
    },
    authenticate: (username: string, password: string) => {
      if (username === '1234@gmail.com' && password === '1234') {
        localStorage.setItem('isLogged', JSON.stringify(true));
        set({ isLogged: true });
      } else {
        localStorage.setItem('isLogged', JSON.stringify(false));
        set({ isLogged: false });
      }
    },
  }));

  export default useStore;
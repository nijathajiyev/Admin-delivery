import { createContext, useContext } from "react";
import { useProvideAuth } from "../hooks/useProvideAuth";


export const authContext = createContext();

export const ProvideAuth=({ children })=> {
  


  const auth  = useProvideAuth()
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
    return useContext(authContext);
  }
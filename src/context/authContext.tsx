import
React, { createContext, useContext, useState,useEffect } from 'react';
import { AuthService } from '../services/AutheService/AuthService';
import {IAuthProps, IAuthContext} from './authContext.interface';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext); 

export function AuthContextProvider({ children }: any) {
  const authService = new AuthService();
  
  const [authenticationToken, setAuthenticationToken] = useState<IAuthProps | null>(null);

  const signIn = async (phoneNumber: string, smsToken: string) => {
    const data = await authService.authenticate(phoneNumber, smsToken);
    setAuthenticationToken(data);
  }

  useEffect(()=>{
    async () =>{
      const data = await authService.getCurrentToken();
      setAuthenticationToken(data);
    }
  },[])


  return (
    <AuthContext.Provider value={{ authenticationToken, signIn}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);

import
React, { createContext, useContext, useState,useEffect } from 'react';
import { AuthService } from '../services/AutheService/AuthService';
import {IAuthProps, IAuthContext} from './authContext.interface';
import { LOCAL_STORAGE_AUTH_TOKEN } from "../configs/const"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext); 

export function AuthContextProvider({ children }: any) {
  const authService = new AuthService();
  
  const [authenticationToken, setAuthenticationToken] = useState<IAuthProps | null>(null);

  const signIn = async (phoneNumber: string, smsToken: string) => {
    const data = await authService.authenticate(phoneNumber, smsToken);
    setAuthenticationToken(data);
  }
  const registeredDatas = async () => {
    if(authenticationToken)
    setAuthenticationToken({...authenticationToken, isRegister: true})
    await AsyncStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, JSON.stringify({...authenticationToken, isRegister: true}))
  }

  useEffect(()=>{
    async () =>{
      const data = await authService.getCurrentToken();
      setAuthenticationToken(data);
    }
  },[])

  return (
    <AuthContext.Provider value={{ authenticationToken, signIn, registeredDatas}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);

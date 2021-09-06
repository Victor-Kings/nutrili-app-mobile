import
React, { createContext, useContext, useState,useEffect } from 'react';
import { AuthService } from '../services/AutheService/AuthService';
import {IAuthProps, IAuthContext,IResponseAuthToken} from './authContext.interface';
import { LOCAL_STORAGE_AUTH_TOKEN } from "../configs/const"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext); 

export function AuthContextProvider({ children }: any) {
  const authService = new AuthService();
  
  const [authenticationToken, setAuthenticationToken] = useState<IAuthProps | null>(null);

  const signIn = async (phoneNumber: string, smsToken: string) => {
    let data:IResponseAuthToken | null = null
    try{
      data = await authService.authenticate(phoneNumber, smsToken.toUpperCase());
    }catch(error){
      console.log("SIGNIN 1 : ", error)
    }
    if(data != null){
      try{
        const isNewUser = await authService.verifyIsUser(data.access_token);
        console.log(isNewUser);
        const authData = mapToAuthenticationToken(data, !isNewUser.newUser);
        setAuthenticationToken(authData);
        await AsyncStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, JSON.stringify(authData));
      }catch(error){
        console.log("SIGNIN 2 : ", error)
      }
    }
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

 const mapToAuthenticationToken= (data: IResponseAuthToken, isValid: boolean): IAuthProps =>{
    data.refresh_token
    const response = {
        access_token: data.access_token, 
        refresh_token: data.refresh_token,
        isRegister: isValid //TODO:is ISREGISTERED
    }
    return response;
  }

  return (
    <AuthContext.Provider value={{ authenticationToken, signIn, registeredDatas}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);

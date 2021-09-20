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
  const [isRegistered, setIsRegistered] =  useState<boolean|null>()

  const signIn = async (phoneNumber: string, smsToken: string) => {
    let data:IResponseAuthToken | null = null
    try{
     data = await authService.authenticate(phoneNumber, smsToken.toUpperCase());
    }catch(error){
      console.log("[ERROR] SIGNIN 1 : ", error)
    }
    if(data !== null){
      try{
        const verifyUser = await authService.verifyIsUser(data.access_token);
        const authData = mapToAuthenticationToken(data, !verifyUser.newUser, verifyUser.ancientPlusComplete);
        setIsRegistered(!verifyUser.newUser)
        await AsyncStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, JSON.stringify(authData));
      }catch(error){
        console.log("[ERROR] SIGNIN 2 : ", error)
      }
    }
  }

  const registeredDatas = async () => {
    const auth_token = await AsyncStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)
    if(auth_token){
      const auth:IAuthProps = JSON.parse(auth_token)
      setIsRegistered(true)
      await AsyncStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, JSON.stringify({...auth, isRegistered: true}))
    }
  }

  useEffect(()=>{
    async () =>{
      const auth_token = await AsyncStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)
      if(auth_token){
       const auth:IAuthProps = JSON.parse(auth_token)
       setIsRegistered(auth.isRegistered);
      }
    }
  },[])

 const mapToAuthenticationToken= (data: IResponseAuthToken, isRegistered: boolean, isRegisteredComplete: boolean): IAuthProps =>{
    const response = {
        access_token: data.access_token, 
        refresh_token: data.refresh_token,
        isRegistered,
        isRegisteredComplete        
    }
    return response;
  }

  return (
    <AuthContext.Provider value={{ isRegistered, signIn, registeredDatas}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);

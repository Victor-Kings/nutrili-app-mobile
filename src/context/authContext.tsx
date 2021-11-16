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

  const signIn = async (phoneNumber: string, smsToken: string): Promise<boolean> => {
    let data:IResponseAuthToken | null = null
    try{
     data = await authService.authenticate(phoneNumber, smsToken.toUpperCase());
    }catch(error){
      console.error("[ERROR] SIGNIN 1 : ", error)
    }
    if(data !== null){
      try{
        const verifyUser = await authService.verifyIsUser(data.access_token);
        const authData = mapToAuthenticationToken(data, !verifyUser.newUser, verifyUser.ancientPlusComplete);//NewUser é true se não preencheu form
        setIsRegistered(!verifyUser.newUser)
        await AsyncStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, JSON.stringify(authData));
        return !verifyUser.newUser
      }catch(error){
        console.error("[ERROR] SIGNIN 2 : ", error)
      }
    }
    return false
  }

  const registeredDatas = async () => {
    const auth_token = await AsyncStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)
    if(auth_token){
      const auth:IAuthProps = JSON.parse(auth_token)
      setIsRegistered(true)
      await AsyncStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, JSON.stringify({...auth, isRegistered: true}))
    }
  }

  const signOut = async () =>{
    try{
      const auth_token = await AsyncStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);
      if (auth_token) {
        const auth: IAuthProps = JSON.parse(auth_token);
        await AsyncStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN);
        await authService.logout(auth.access_token);
      }
    }catch(error){
       console.error("[ERROR] SIGNOUT: ", error)
    }
    
  }
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
    <AuthContext.Provider value={{ isRegistered, signIn, registeredDatas, setIsRegistered, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);

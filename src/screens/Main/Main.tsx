import React from 'react';

import { AppDrawer } from '../../routes/AppDrawer';
import { AuthStack } from '../../routes/AuthStack';
import { useAuthContext } from '../../context/authContext'



export default function Main() {
  const {authenticationToken} =useAuthContext();

  const verifyLoggin = (): boolean=>{
    if(authenticationToken){
      return authenticationToken.isRegister
    }
    return false
  }
  return (
    <>
      {verifyLoggin() ? (
        <AppDrawer />
      )
        : (
          <AuthStack />
        )}
    </>
  );
}
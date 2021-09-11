import React from 'react';

import { AppDrawer } from '../../routes/AppDrawer';
import { AuthStack } from '../../routes/AuthStack';
import { useAuthContext } from '../../context/authContext'



export default function Main() {
  const {isRegistered} =useAuthContext();

  return (
    <>
      {isRegistered ? (
        <AppDrawer />
      )
        : (
          <AuthStack />
        )}
    </>
  );
}
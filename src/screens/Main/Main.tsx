import React from 'react';

import { AppDrawer } from '../../routes/AppDrawer';
import { AuthStack } from '../../routes/AuthStack';
import { useAuthContext } from '../../context/authContext'

export default function Main() {
  const { loged }: any = useAuthContext();
  return (
    <>
      {loged ? (
        <AppDrawer />
      )
        : (
          <AuthStack />
        )}
    </>
  );
}
import React from 'react';

import { MyDrawer } from '../../routes/Drawer';
import { MyStack } from '../../routes/Stack';
import {useAuthContext} from '../../context/authContext'

export default function Main(){
    const {userToken}:any = useAuthContext();
    return(
        <>
        {userToken ? (
         <MyDrawer/>
        ) : (
          <MyStack/>
        )}
      </>
    );
}
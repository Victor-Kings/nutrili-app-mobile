import React, { useEffect, useState } from "react";

import { AppDrawer } from "../../routes/AppDrawer";
import { AuthStack } from "../../routes/AuthStack";
import { useAuthContext } from "../../context/authContext";
import { LOCAL_STORAGE_AUTH_TOKEN } from "../../configs/const";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IAuthProps } from "../../context/authContext.interface";
import { NavigationContainer } from "@react-navigation/native";
import {navigationRef} from "../../routes/rootNavigator"

export default function Main() {
  const { isRegistered, setIsRegistered } = useAuthContext();
  // const { controller, setController } = useState(false);
  // useEffect(() => {
  //   (async () => {
  //     const auth_token = await AsyncStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);
  //     if (auth_token) {
  //       const auth: IAuthProps = JSON.parse(auth_token);
  //       if (auth) {
  //         setController(true);
  //       }
  //     }
  //   })();
  // }, []);
  
  return (

    <NavigationContainer ref={navigationRef} independent={true}>
        <AppDrawer/>
    </NavigationContainer>

  );
}

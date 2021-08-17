import React,{useState, createContext, useMemo} from 'react';
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';
import {MyDrawer} from './src/routes/Drawer'
import {MyStack} from './src/routes/Stack'
import {AuthContext} from './src/context/authContext'
//const AuthContext = createContext({});

const RootStackScreen = ({ userToken }:any) => (
  <>
    {userToken ? (
     <MyDrawer/>
    ) : (
      <MyStack/>
    )}
  </>
);


export default () => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold

  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const [userToken, setUserToken] = useState(null);
  const [userSignedIn, setUserSignedIn] = useState(false);

  
  const signIn = () => {
    setUserSignedIn(true);
    setUserToken("asdf");
  }

  const signUp = () => {
    setUserToken("asdf");
  }

  const signOut = () => {
    setUserToken(null);
  }

  //console.log(userToken)
  return (
    <AuthContext.Provider value={{userToken}}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider> 
  );
};

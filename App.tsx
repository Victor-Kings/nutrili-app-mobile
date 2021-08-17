import React,{useState, createContext, useMemo} from 'react';
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';
import Main from './src/screens/Main/Main'
import {AuthContextProvider} from './src/context/authContext'
//const AuthContext = createContext({});



export default function App(){
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // const [userToken, setUserToken] = useState('');
  // const [userSignedIn, setUserSignedIn] = useState(false);

  

  //console.log(userToken)
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Main/>
      </NavigationContainer>
    </AuthContextProvider> 
  );
};

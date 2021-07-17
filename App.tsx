import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';
import {MyDrawer} from './src/routes/Drawer'

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold

  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}


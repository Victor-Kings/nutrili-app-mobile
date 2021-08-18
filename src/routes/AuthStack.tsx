import React from "react";
import { View,Button,Text } from "react-native";
import  {createStackNavigator}  from '@react-navigation/stack';
import {Login} from '../screens/Login/Login'

const Stack = createStackNavigator();


export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

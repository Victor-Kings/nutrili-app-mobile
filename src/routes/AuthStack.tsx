import React from "react";
import { View,Button,Text } from "react-native";
import  {createStackNavigator}  from '@react-navigation/stack';
import {Login} from '../screens/Login/Login'
import {LoginQuestions} from '../screens/LoginQuestions/LoginQuestions'
import {LoginAuth} from '../screens/LoginAuth/LoginAuth'
const Stack = createStackNavigator();


export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LoginQuestion" component={LoginQuestions} />
      <Stack.Screen name="LoginAuth" component={LoginAuth} />
    </Stack.Navigator>
  );
}

import React from "react";
import { View,Button,Text } from "react-native";
import  {createStackNavigator}  from '@react-navigation/stack';
import {Login} from '../screens/Login/Login'

const Stack = createStackNavigator();

export function SettingsScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export function HomeScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cadastro2" component={HomeScreen} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

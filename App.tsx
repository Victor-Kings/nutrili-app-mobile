import React from 'react';
import { StyleSheet, Text, View,Button,Image , TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainTemplate from './src/components/templateMain';

import {
  createDrawerNavigator,
} from '@react-navigation/drawer';


const Drawer =  createDrawerNavigator();

const content = { 
  perfil: "https://diariodecuiaba.nyc3.digitaloceanspaces.com/storage/webdisco/2020/06/14/1200x900/d5426f95dedf886c1c5ec4bf093815c2.jpg",
  name: "Silvio Santos"
};

function MyDrawer() {
  return (
    <Drawer.Navigator
    >
      <Drawer.Screen 
        name="Home"  
      >
          {
            (props)=>(
              <MainTemplate {...props} content={content}>
                <View style={{height:'100%'}}>
                  <Text>OAUHDOUAHDOUASHDOUAHSDUHAODHOASD</Text>
                </View>
              </MainTemplate>
            )
          }
      </Drawer.Screen>
      {/* <Drawer.Screen name="Settings" component={Notifications} options={{ title: 'My home' }} /> */}
      {/* <Drawer.Screen name="Settings" component={()=>(<View>AAAAAAAAA</View>)} options={{ title: '2' }} /> */}
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

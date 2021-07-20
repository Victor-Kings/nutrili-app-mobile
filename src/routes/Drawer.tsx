import React from "react";
import { Text, View } from "react-native";
import MainTemplate from "../components/MainTemplate";
import { ContentDrawer } from "../screens/ContentDrawer/ContentDrawer";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Home  from '../screens/Home/Home';
const Drawer = createDrawerNavigator();

const content = {
  perfil:
    "https://diariodecuiaba.nyc3.digitaloceanspaces.com/storage/webdisco/2020/06/14/1200x900/d5426f95dedf886c1c5ec4bf093815c2.jpg",
  name: "Silvio Santos",
};

export function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerStyle={{ width: "100%", backgroundColor: "#4197E5" }}
      drawerContent={(props) => <ContentDrawer {...props} />}
    >
      <Drawer.Screen name="Home">
        {(props) => (
          <MainTemplate {...props} content={content}>
            
              <Home/> 
            
          </MainTemplate>
        )}
      </Drawer.Screen>
      {/* <Drawer.Screen name="Settings" component={Notifications} options={{ title: 'My home' }} /> */}
      {/* <Drawer.Screen name="Settings" component={()=>(<View>AAAAAAAAA</View>)} options={{ title: '2' }} /> */}
    </Drawer.Navigator>
  );
}

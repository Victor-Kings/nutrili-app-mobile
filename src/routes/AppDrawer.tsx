import React from "react";
import MainTemplate from "../components/MainTemplate";
import { ContentDrawer } from "../screens/ContentDrawer/ContentDrawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../screens/Home/Home';
import Notifications from '../screens/Notifications/Notifications';
import Diet from "../screens/Diet/Diet";
import { AncientPlus } from "../screens/AncientPlus/AncientPlus";

const Drawer = createDrawerNavigator();

const content = {
  perfil:
    "https://diariodecuiaba.nyc3.digitaloceanspaces.com/storage/webdisco/2020/06/14/1200x900/d5426f95dedf886c1c5ec4bf093815c2.jpg",
  name: "Silvio Santos",
};

const contentNoti = [
  {
    sender: "Sistema",
    message: "Lorem ipsum dolor sit amet, consectetur.Lorem ipsum.",
    isNew: false
  },
  {
    sender: "Dr linda Murfhy",
    message: "Lorem ipsum dolor sit amet, consectetur.Lorem ipsum. ipsum vipsumipsumipsumipsumipsum.",
    isNew: true
  }
]

export function AppDrawer() {
  return (
    <Drawer.Navigator
      drawerStyle={{ width: "100%", backgroundColor: "#4197E5" }}
      drawerContent={(props: any) => <ContentDrawer {...props} />}
    >
      <Drawer.Screen name="Home">
        {(props) => (
          <MainTemplate {...props} content={content}>
            <Home />
          </MainTemplate>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Notifications">
        {(props) => (
          <MainTemplate {...props} content={content}>
            <Notifications content={contentNoti} />
          </MainTemplate>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Diet">
        {(props) => (
          <MainTemplate {...props} content={content}>
            <Diet />
          </MainTemplate>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="AncientPlus">
        {(props) => (
          <MainTemplate {...props} content={content}>
            <AncientPlus />
          </MainTemplate>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

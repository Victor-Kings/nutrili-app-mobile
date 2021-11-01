import React from "react";
import MainTemplate from "../components/MainTemplate";
import { ContentDrawer } from "../screens/ContentDrawer/ContentDrawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../screens/Home/Home';
import Notifications from '../screens/Notifications/Notifications';
import NutritionalInformation from '../screens/NutritionalInformation/NutritionalInformation';
import Diet from "../screens/Diet/Diet";
import Results from "../screens/Results/Results"
import { Profile } from "../screens/Profile/Profile";
import { AncientPlus } from "../screens/AncientPlus/AncientPlus";
import { foods } from "../../__mocks__/diet";
import { foodDatas } from "../../__mocks__/foodDatas"
import { informations } from "../../__mocks__/informations"

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
            <Notifications />
          </MainTemplate>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Diet">
        {(props) => (
          <MainTemplate {...props} content={content}>
            <Diet content={ foods } />
          </MainTemplate>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Results">
        {(props) => (
          <MainTemplate {...props} content={content}>
            <Results content={ foodDatas } />
          </MainTemplate>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="NutritionalInformation">
        {(props) => (
          <MainTemplate {...props} content={content}>
            <NutritionalInformation content={ informations } />
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
      <Drawer.Screen name="Profile">
        {(props) => (
          <Profile  {...props} content={content}/>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

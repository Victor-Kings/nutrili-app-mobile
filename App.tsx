import React from 'react';
import { StyleSheet, Text, View,Button,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MenuLogo from './src/assets/img/menu.svg';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function Home({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <View>
        <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      </View>
      <View>
      {/* <Logo></Logo> */}
      {/* <SvgUri
        width="100%"
        height="100%"
        uri ='./src/assets/img/menu.svg'
      /> */}
      <MenuLogo/>
    </View>
    </View>
  );
}

function Notifications() {
 console.log("ASDADS")
  return(
    <View>
      <MenuLogo></MenuLogo>
    </View>
  );
  // return (
  //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //     <Text>Notifications Screen</Text>
  //   </View>
  // );
}

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Tab = createBottomTabNavigator();

function Tabs (){
  return(
    <Tab.Navigator
        initialRouteName="HOME"
        tabBarOptions = {{
          style: { height: 100, backgroundColor: "#4197E5"},
          tabStyle: { },
          labelPosition: 'below-icon',
          labelStyle:{ color : "#fff", fontSize: 24,fontWeight:'600' , paddingBottom: 10}
        }
      }
        
    >
        <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          title:"HOME",
          tabBarIcon: ({})=>(
            <MenuLogo width="40px"/> 
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.openDrawer();
          }
        })}
        />
    </Tab.Navigator>
  );
}
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      
      <Drawer.Screen name="Home" component={Tabs} />  
      <Drawer.Screen name="Settings" component={Notifications} />
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

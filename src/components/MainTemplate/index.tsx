import React,{useState} from "react";
import { StyleSheet, Text, View,Button,Image , TouchableOpacity} from 'react-native';
import {Header, Container, MenuButton,TextButton,ImagePerfil,HeaderContent,TextHeader} from './styles';
import MenuLogo from '../../assets/img/menu.svg';
import { useFocusEffect } from "@react-navigation/native";
import { GetDataProfile } from "../../services/GetDataProfile/GetDataProfile";
import { LOCAL_STORAGE_AUTH_TOKEN } from "../../configs/const"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { correctionUrlImage } from "../../utils/correctionImage";

const MainTemplate = ({navigation, children, content}:any) =>{
    const [contentData, setContentData] = useState<null|{perfil: string, name:string}>(null);
    const fetchData = async () => {
        try{
          const auth_token = await AsyncStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);
          if (auth_token) {
            const response = await new GetDataProfile().execute();
            setContentData({ perfil: response.profilePic, name: response.name });
          }
        }catch(error){
           console.error("[ERROR] SIGNOUT: ", error)
        }
      
      };
    
      useFocusEffect(
        React.useCallback(() => {
            fetchData();
        }, [])
      )
      
     return(
       <Container>
            <Header>
                <HeaderContent  onPress={()=> navigation.navigate("Profile")}>
                    <ImagePerfil source={{uri: contentData?.perfil ? correctionUrlImage(contentData?.perfil) : "https://diariodecuiaba.nyc3.digitaloceanspaces.com/storage/webdisco/2020/06/14/1200x900/d5426f95dedf886c1c5ec4bf093815c2.jpg"}}/>
                    <TextHeader>
                       {contentData?.name}
                    </TextHeader> 
                </HeaderContent>
            </Header>
        <View style={{height: '75%'}}>
            {children}
        </View>
        <MenuButton onPress={()=>navigation.openDrawer()}>
            <MenuLogo width='40px'/>
            <TextButton>MENU</TextButton>
        </MenuButton>
       </Container>
     );
}

export default MainTemplate;
import React,{useState, useEffect} from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconBack from "../../assets/img/iconBack.svg";
import IconResults from "../../assets/img/iconResults.svg";
import IconPlus from "../../assets/img/iconPlus.svg";
import IconNotification from "../../assets/img/iconNotification.svg";
import IconPhotography from "../../assets/img/iconPhotography.svg";
import IconNutritionalInformation from "../../assets/img/iconNutritionalInformation.svg";
import IconRecommendedDiet from "../../assets/img/iconRecommendedDiet.svg";
import IconLogout from "../../assets/img/iconLogout.svg";
import { GetDataProfile } from "../../services/GetDataProfile/GetDataProfile";
import { LOCAL_STORAGE_AUTH_TOKEN } from "../../configs/const"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsDrawerOpen } from '@react-navigation/drawer';

import {
  Container,
  Header,
  HeaderContentUser,
  Avatar,
  TextNameUser,
  Body,
  ContentBody,
  BodyButtons,
} from "./styles";

import { ButtonMenu } from "../../components/ButtonMenu/ButtonMenu";
import { useAuthContext } from "../../context/authContext";
import { correctionUrlImage } from "../../utils/correctionImage";

export function ContentDrawer({ navigation, children, content }: any) {
  const { signOut }: any = useAuthContext();
  const [contentData, setContentData] = useState<null|{perfil: string, name:string}>(null);
  const isDrawerOpen = useIsDrawerOpen()
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

  useEffect(() => {
    if(isDrawerOpen){
      fetchData();
    }
  }, [isDrawerOpen])
  
  const handlerOnClickBack = () => {
    navigation.closeDrawer();
  };

  const handler = (page?: string) => {
    navigation.navigate(page);
  };

  const handlerLogout = async() => {
    await signOut()
    navigation.navigate("Login")
  };

  return (
    <Container>
      <SafeAreaView />
      <ContentBody>
        <Header>
          <ButtonMenu
            text="VOLTAR"
            Icon={IconBack}
            sizeText={18}
            sizeImageHeight={34}
            sizeImageWidth={34}
            handleClick={handler}
            page="Home"
          ></ButtonMenu>
        {contentData && <HeaderContentUser onPress={() => handler("Profile")}>
            <Avatar
              source = {{
                uri: contentData.perfil?correctionUrlImage(contentData.perfil):"https://diariodecuiaba.nyc3.digitaloceanspaces.com/storage/webdisco/2020/06/14/1200x900/d5426f95dedf886c1c5ec4bf093815c2.jpg"
              }}
            />
            <TextNameUser>{contentData.name}</TextNameUser>
          </HeaderContentUser>}
        </Header>
        <Body>
          <ScrollView>
            <BodyButtons>
              <ButtonMenu
                text="RESULTADOS"
                Icon={IconResults}
                sizeText={18}
                sizeImageHeight={80}
                sizeImageWidth={80}
                containerSize={140}
                handleClick={handler}
                page="Results"
              />
              <ButtonMenu
                text="ANCIÃO PLUS"
                Icon={IconPlus}
                sizeText={18}
                sizeImageHeight={80}
                sizeImageWidth={80}
                containerSize={140}
                handleClick={handler}
                page="AncientPlus"
              />
            </BodyButtons>

            <BodyButtons>
              <ButtonMenu
                text="TIRAR FOTO DA ALIMENTAÇÃO"
                Icon={IconPhotography}
                sizeText={18}
                sizeImageHeight={80}
                sizeImageWidth={80}
                containerSize={140}
                handleClick={handler}
                page="Home"
              />
              <ButtonMenu
                text="INFORMAÇÃO NUTRICIONAL"
                Icon={IconNutritionalInformation}
                sizeText={18}
                sizeImageHeight={80}
                sizeImageWidth={80}
                containerSize={140}
                handleClick={handler}
                page="NutritionalInformation"
              />
            </BodyButtons>
            <BodyButtons>
              <ButtonMenu
                text="NOTIFICAÇÕES"
                Icon={IconNotification}
                sizeText={18}
                sizeImageHeight={80}
                sizeImageWidth={80}
                containerSize={140}
                handleClick={handler}
                page="Notifications"
              />
              <ButtonMenu
                text="DIETA"
                Icon={IconRecommendedDiet}
                sizeText={18}
                sizeImageHeight={80}
                sizeImageWidth={80}
                containerSize={140}
                handleClick={handler}
                page="Diet"
              />
            </BodyButtons>
            <BodyButtons>
              <ButtonMenu
                text="SAIR"
                Icon={IconLogout}
                sizeText={18}
                sizeImageHeight={80}
                sizeImageWidth={80}
                containerSize={140}
                handleClick={handlerLogout}
              />
            </BodyButtons>
          </ScrollView>
        </Body>
      </ContentBody>
    </Container>
  );
}

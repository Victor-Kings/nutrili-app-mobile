import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconBack from "../../assets/img/iconBack.svg";
import IconResults from "../../assets/img/iconResults.svg";
import IconPlus from "../../assets/img/iconPlus.svg";
import IconNotification from "../../assets/img/iconNotification.svg";
import IconPhotography from "../../assets/img/iconPhotography.svg";
import IconNutritionalInformation from "../../assets/img/iconNutritionalInformation.svg"
import IconRecommendedDiet from "../../assets/img/iconRecommendedDiet.svg"

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
import { manifest } from "expo-updates";

export function ContentDrawer({ ...props }) {
  const handlerOnClickBack = () => {
    props.navigation.closeDrawer()
  };

  const handler = (page?: string) => {
    props.navigation.navigate(page);
  }
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
          <HeaderContentUser>
            <Avatar
              source={{
                uri: "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png",
              }}
            />
            <TextNameUser>Silvio S.</TextNameUser>
          </HeaderContentUser>
        </Header>
        <Body>
          <BodyButtons>
            <ButtonMenu
              text="RRRRRR"
              Icon={IconResults}
              sizeText={18}
              sizeImageHeight={80}
              sizeImageWidth={80}
              containerSize={140}
              handleClick={handler}
              page="Home"
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
              page="Home"
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
        </Body>
      </ContentBody>
    </Container>
  );
}

import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconBack from "../../assets/img/iconBack.svg";
import IconResults from "../../assets/img/iconResults.svg";
import IconPlus from "../../assets/img/iconPlus.svg";



import {
  Container,
  Texts,
  Header,
  HeaderContentUser,
  Avatar,
  TextNameUser,
  Body,
  ContentBody,
  BodyButtons,
} from "./styles";

import ButtonMenu from "../../components/ButtonMenu";

export function ContentDrawer({ ...props }) {
  const handlerOnClickBack = () => {
    props.navigation.closeDrawer()
  };

  const handler = () => {
    props.navigation.navigate("Home");
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
              text="RESULTADOS"
              Icon={IconResults}
              sizeText={18}
              sizeImageHeight={80}
              sizeImageWidth={80}
              containerSize={140}
              handleClick={handler}
            />
          <ButtonMenu
              text="ANCIÃO PLUS"
              Icon={IconPlus}
              sizeText={18}
              sizeImageHeight={80}
              sizeImageWidth={80}
              containerSize={140}
              handleClick={handler}
            />
          </BodyButtons>

          <BodyButtons>
          <ButtonMenu
              text="RESULTADOS"
              Icon={IconResults}
              sizeText={18}
              sizeImageHeight={80}
              sizeImageWidth={80}
              containerSize={140}
              handleClick={handler}
            />
          <ButtonMenu
              text="ANCIÃO PLUS"
              Icon={IconPlus}
              sizeText={18}
              sizeImageHeight={80}
              sizeImageWidth={80}
              containerSize={140}
              handleClick={handler}
            />
          </BodyButtons>
          <BodyButtons>
          <ButtonMenu
              text="RESULTADOS"
              Icon={IconResults}
              sizeText={18}
              sizeImageHeight={80}
              sizeImageWidth={80}
              containerSize={140}
              handleClick={handler}
            />
          <ButtonMenu
              text="ANCIÃO PLUS"
              Icon={IconPlus}
              sizeText={18}
              sizeImageHeight={80}
              sizeImageWidth={80}
              containerSize={140}
              handleClick={handler}
            />
          </BodyButtons>
        </Body>
      </ContentBody>
    </Container>
  );
}

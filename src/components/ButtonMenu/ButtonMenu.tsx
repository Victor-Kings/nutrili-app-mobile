import React, { FC } from "react";
import { IButtomMenuProps } from "./ButtonMenu.interface";
import IconBack from "../../assets/img/iconBack.svg";
import { RFValue } from "react-native-responsive-fontsize";

import { Container, Text, Button } from "./styles";

export const ButtonMenu: FC<IButtomMenuProps> = ({
  Icon,
  text,
  handleClick,
  sizeImageHeight = 40,
  sizeImageWidth = 40,
  sizeText = 18,
  containerSize = 80,
  page
}) => {
  const handle = () => {
    if (handleClick) {
      handleClick(page);
    }
  };

  return (
    <Container containerSize={containerSize}>
      <Button onPress={handle}>
        {Icon ? <Icon width={RFValue(sizeImageHeight)} height={RFValue(sizeImageWidth)} /> : <></>}
        <Text size={sizeText}>{text}</Text>
      </Button>
    </Container>
  );
};

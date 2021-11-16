import React, { FC } from "react";
import { IButtomMenuProps } from "./ButtonMenu.interface";
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
  page,
  color,
}) => {
  const handle = () => {
    if (handleClick) {
      if (page) {
        handleClick(page);
      } else {
        handleClick();
      }
    }
  };

  return (
    <Container containerSize={containerSize}>
      <Button onPress={handle}>
        {Icon ? (
          <Icon
            width={RFValue(sizeImageHeight)}
            height={RFValue(sizeImageWidth)}
          />
        ) : (
          <></>
        )}
        <Text size={sizeText} color={color}>
          {text}
        </Text>
      </Button>
    </Container>
  );
};

import styled from "styled-components/native";
import { StyleSheet } from "react-native";

type OpaqueColorValue = symbol & { __TYPE__: "Color" };
export type ColorValue = string | OpaqueColorValue;

interface ITittleProps {
  size?: string | undefined;
  color?: ColorValue | undefined;
}

export const ContainerBox = styled.View`
  display: flex;
  flex: 1;
  width: 92%;
  max-height: 90%;
  left: 4%;
  top: 2%;
  background: #ffffff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${({ size }: ITittleProps): any => (size ? size : "24")}px;
  color: ${({ color }: ITittleProps): any => (color ? color : "#414141")};
  text-align: center;
`;

export const List = styled.SectionList`
  flex: 1;
  width: 100%;
  padding: 1% 5%;
`;

export const Container = styled.View`
  height: 100%;
`;

export const ItemTitle = styled.Text`
    padding-top: 2px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 2px;
    font-size: 24px;
    font-weight: bold;
    color: #787878;
`;

export const ItemContent = styled.Text`
  font-size: 26px;
  height: 44px;
  padding-left: 40px;
  color: #8C8C8C;
`;
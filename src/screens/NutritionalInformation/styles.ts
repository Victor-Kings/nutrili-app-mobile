import styled from "styled-components/native";
import { ScrollView } from "react-native";

type OpaqueColorValue = symbol & { __TYPE__: "Color" };
export type ColorValue = string | OpaqueColorValue;


interface ITittleProps {
    size?: string | undefined;
    color?: ColorValue | undefined;
  }

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${({ size }: ITittleProps): any => (size ? size : "24")}px;
  color: ${({ color }: ITittleProps): any => (color ? color : "#414141")};
  text-align: center;
  top: 4%;
`;

export const Container = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
`;

export const ContainerBox = styled.ScrollView`
  display: flex;
  flex: 1;
  width: 92%;
  max-height: 85%;
  top: 8%;
  background: #ffffff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const Text = styled.Text`
    font-weight: 600;
    font-size: 26px;
    color: #5C5C5C;
    text-align: center;
    padding-right: 5%;
    padding-left: 5%;

`;
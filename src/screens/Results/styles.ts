import styled from "styled-components/native";
import { StyleSheet } from "react-native";

type OpaqueColorValue = symbol & { __TYPE__: "Color" };
export type ColorValue = string | OpaqueColorValue;

interface ITittleProps {
  size?: string | undefined;
  color?: ColorValue | undefined;
}

export const ContainerBox = styled.ScrollView`
  display: flex;
  flex: 1;
  width: 92%;
  height: 100%;
  left: 4%;
  top: 2%;
  background: #ffffff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const ContainerGraphic = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  padding-bottom: 0%;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${({ size }: ITittleProps): any => (size ? size : "28")}px;
  color: ${({ color }: ITittleProps): any => (color ? color : "#8C8C8C")};
  padding-left: 5%;
  padding-top: 2%;
  text-align: left;
`;

export const Container = styled.View`
  height: 95%;
`;

export const Rectangle = styled.View`
  height: 20px;
  width: 60px;
  background-color: ${({ color }: ITittleProps): any => (color ? color : "#414141")};
  border-radius: 4px;
`;

export const Subtitles = styled.View`
  width: 40%; 
  height: 70px;
  align-items: center;
`;

export const LabelBox = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const LabelSubtitles = styled.Text`
  font-weight: 600;
  font-size: ${({ size }: ITittleProps): any => (size ? size : "18")}px;
  color: ${({ color }: ITittleProps): any => (color ? color : "#8C8C8C")};
  text-align: center;
  padding-bottom: 100%;
`;
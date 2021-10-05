import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

type OpaqueColorValue = symbol & { __TYPE__: 'Color' };
export type ColorValue = string | OpaqueColorValue;

interface ITittleProps {
    size?: string | undefined;
    color?: ColorValue | undefined;
}

export const Container = styled.View`
    display: flex;
    flex: 1;
    width: 92%;
    height: 9%;
    left: 4%;
    top: 2%;
    background: #FFFFFF;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;



`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: ${({ size }: ITittleProps): any => size ? size : '24'}px;
    color:  ${({ color }: ITittleProps): any => color ? color : '#414141'};
    text-align: center
`;


export const listStyle = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 24,
      fontWeight: 'bold',
      color : '#787878',
    },
    item: {
      fontSize: 26,
      height: 44,
      paddingLeft: 40,
      color : '#8C8C8C',
    },
  })

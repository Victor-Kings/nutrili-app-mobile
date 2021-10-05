import { TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Button } from '../../components/ButtonSearch/styles';

export const Container = styled.View`
   align-items: center;
   background-color: #F6F6F6;
   width: 100%;
   height: 100%;
   padding-top: 20%;
`;

interface ITextProps {
   size?: number;
}

type OpaqueColorValue = symbol & { __TYPE__: 'Color' };
export type ColorValue = string | OpaqueColorValue;

interface ICardFoodProps {
   color?: ColorValue | undefined;
}

export const ContainerButtons = styled.View`
    width: 100%;
    align-items: center;
`;

export const ButtonTouch = styled.TouchableOpacity`
   flex: 1;
   max-width: 180px;
   width: 40%;
   max-height: 50px;
   min-height: 50px;
   border-radius: 9px;
   background-color: ${({ color }: ICardFoodProps): any => color ? color : 'FFFFF'};
   justify-content: center;
`;

export const Title = styled.Text`
    align-self: flex-start;
    margin: 50px 0 5px 12%;
    color: #9C9C9C;
    font-size: 20px;
`;


export const TextButton = styled.Text`
   color: white;
   font-size: 20px;
   text-align:center;
   font-weight: 600;
`;


export const SquaresTopRight = styled.View`
   width: 500px;
   height: 100px;
   background-color:  #4197E5;
   position:absolute;
   top: 0px; left: 65%;
   transform: rotate(30deg);
`;

export const SquaresTopLeft = styled.View`
   width: 500px;
   height: 100px;
   background-color:  #4197E5;
   position:absolute;
   top: 30%; left: -98%;
   transform: rotate(-70deg);
`;

export const SquaresBottom = styled.View`
   width: 500px;
   height: 150px;
   background-color:  #4197E5;
   position:absolute;
   bottom: -30%; left: -10%;
   transform: rotate(12deg);
`;

export const TextCustom = styled.Text`
   font-family: 'OpenSans_600SemiBold';
   font-size: 26px;
   line-height: 35px;
   text-align: center;
   color:#8C8C8C;
   width: 95%;
   align-self: center;
   padding-top: 35px;
`;

export const TextCustomLittleSize = styled.Text`
   padding-top: 50px;
   font-family: 'OpenSans_600SemiBold';
   font-size: 18px;
   line-height: 35px;
   text-align: left;
   color:#8C8C8C;
   width: 95%;
   align-self: center;
   padding-bottom: 0px;
`;

export const ContainerSearch = styled.View`
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

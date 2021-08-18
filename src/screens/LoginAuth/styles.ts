import styled from 'styled-components/native';

interface ITextProps {
   size?: number;
}

type OpaqueColorValue = symbol & { __TYPE__: 'Color' };
export type ColorValue = string | OpaqueColorValue;

interface ICardFoodProps {
   color?: ColorValue | undefined; 
}

export const Title = styled.Text`
   align-self: center;
   margin: 50px auto;
   color: #414141;
   font-size: 22px;
   text-align: center;
`;

export const Container = styled.View`
   align-items: center;
   background-color: #F6F6F6;
   width: 100%;
   height: 100%;
   padding-top: 20%;
`;

export const ContentContainer = styled.View`
   background-color: #FFFFFF;
   width: 90%;
   height: 80%;
   align-items: center;
`;
export const TextContainer = styled.View`
   width: 80%;
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


export const ButtonTouch = styled.TouchableOpacity`
   max-width: 180px;
   width: 20%;
   max-height: 50px;
   border-radius: 9px;
   background-color: ${({color}: ICardFoodProps):any => color ? color : 'FFFFF'};
   align-self: center;
   flex: 1;
   align-items: center;
   justify-content: center;
`;

export const TextButton = styled.Text`
   color: white;
   font-size: 20px;
   text-align:center;
   font-weight: 600;
`;

export const BackButtonContainer = styled.View`
   margin-top: 5%;
   margin-left:5px;
   align-self:flex-start;
`;
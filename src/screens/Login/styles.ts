import styled from 'styled-components/native';

interface ITextProps {
    size?: number;
}

type OpaqueColorValue = symbol & { __TYPE__: 'Color' };
export type ColorValue = string | OpaqueColorValue;

interface ICardFoodProps {
    color?: ColorValue | undefined;
}

export const PlaceHolder = {
    color: "#575757",
    height: 40,
    width: "80%",
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#C9C9C9"
}

export const Container = styled.View`
    align-items: center;
    background-color: #F6F6F6;
    padding-top: 30%;
    height: 100%;
`;

export const Title = styled.Text`
    align-self: flex-start;
    margin: 50px 0 5px 12%;
    color: #9C9C9C;
    font-size: 20px;
`;

export const ButtonTouch = styled.TouchableOpacity`
    max-width: 180px;
    width: 45%;
    max-height: 50px;
    min-height: 50px;
    border-radius: 9px;
    background-color: ${({ color }: ICardFoodProps): any => color ? color : 'FFFFF'};
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

export const SquaresTopRight = styled.View`
   width: 500px;
   height: 100px;
   background-color:  #4197E5;
   position:absolute;
   top: 0px; left: 40%;
   transform: rotate(30deg);
`;

export const SquaresTopLeft = styled.View`
   width: 500px;
   height: 100px;
   background-color:  #4197E5;
   position:absolute;
   top: 250px; left: -90%;
   transform: rotate(-70deg);
`;

export const SquaresBottom = styled.View`
   width: 500px;
   height: 500px;
   background-color:  #4197E5;
   position: relative;
   bottom: 0px; left: 0%;
   transform: rotate(12deg);
`;
import styled from 'styled-components/native';

interface ITextProps {
    size?: number;
}

type OpaqueColorValue = symbol & { __TYPE__: 'Color' };
export type ColorValue = string | OpaqueColorValue;
interface ICardFoodProps {
    color?: ColorValue | undefined; 
}

export const ContainerModal = styled.View`
    flex: 1;
    justify-content: center;
    margin: 10% 4%;
    background-color: #a9a9a9;
    border-radius: 5px;
    padding: 0 8px;
`;

export const CardFood = styled.View`
    background-color: ${({color}: ICardFoodProps):any => color ? color : 'FFFFF'};
    height: 45px;
    width: 100%;
    border-radius: 5px;
    margin: 2px auto;
    padding: 0 5%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CardAddFood = styled.TouchableOpacity`
    background-color: #DAEBFB;
    height: 45px;
    width: 100%;
    border-radius: 5px;
    margin: 2px auto;
    padding: 0 5%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TextCardFood = styled.Text`
    color: #757575;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
`;

export const ButtonTouch = styled.TouchableOpacity`
    max-width: 185px;
    width: 50%;
    max-height: 57px;
    border-radius: 44px;
    background-color: ${({color}: ICardFoodProps):any => color ? color : 'FFFFF'};
    align-self: center;

    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    color: white;
    font-size: ${({size}: ITextProps)=> size ? size : 20}px;
    text-align:center;
    font-weight: 600;
`;

export const ContainerViews =  styled.View`
    flex: 1;
    max-height: 80%;
`;

export const ContainerButtons =  styled.View`
    flex: 1;
    max-height: 20%;
    background-color: aquamarine; 
`;

export const TextHeader = styled.Text`
    color: #757575;
    margin-top: 24px;
    margin-bottom: 18px;
    font-weight: 600;
    font-size: 26px;
    line-height: 35px;
`;
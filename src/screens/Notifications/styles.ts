import styled from 'styled-components/native';

type OpaqueColorValue = symbol & { __TYPE__: 'Color' };
export type ColorValue = string | OpaqueColorValue;

interface ITittleProps {
    size?: string | undefined;
    color?: ColorValue | undefined;
}

export const Container = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
`;

export const ContainerCard = styled.View`
    background-color: white;
    margin: 4%;
    border-radius: 4px;
    width: 94%;
    padding: 2%;
`;
export const ContainerContentCard = styled.ScrollView`
    display: flex;
    flex: 1;
`;

export const HeaderCard = styled.View`
    width: 95%;
    flex-direction: row;
    justify-content: space-between;
`;

export const Tittle = styled.Text`
    font-weight: bold;
    font-size: ${({ size }: ITittleProps): any => size ? size : '24'}px;
    color:  ${({ color }: ITittleProps): any => color ? color : '#414141'};
`;
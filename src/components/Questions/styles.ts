import styled from 'styled-components/native';

interface ITextProps {
    size?: number;
    color?: string | undefined;
    marginBottom?: string | undefined;
 }

export const TextContainer = styled.View`
   width: 80%;
   align-items: center;
   align-self: center;
   padding-bottom: 5%;
`;
export const Title = styled.Text`
   align-self: center;
   margin: 50px auto;
   color: ${({ color }: ITextProps): any => color ? color : '#414141'};
   font-size: 22px;
   text-align: center;
`;
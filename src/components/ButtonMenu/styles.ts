import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";
import { Color } from 'react-native-svg';

interface IStyledProps {
    size?: number;
    containerSize?: number;
    color?:Color;
 }

export const Container = styled.View`
    width: ${({containerSize}: IStyledProps) => containerSize ? RFValue(containerSize) : RFValue(80)}px;
    height: ${({containerSize}: IStyledProps) => containerSize ? RFValue(containerSize) : RFValue(80)}px;
    display: flex;
    justify-content: center;
`;

export const Button = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Text  = styled.Text`
    text-align: center;
    color: ${({color}: IStyledProps) => color ? color: "white"};
    margin-top: ${RFValue(10)}px;
    width: 100%;
    font-family: 'OpenSans_600SemiBold';
    font-size: ${({size}: IStyledProps) => size ? RFValue(size) : RFValue(18)}px;
`;
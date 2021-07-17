import styled from 'styled-components/native';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize'

export const Container = styled.View `
    display: flex;
    background-color: #4197E5;
    width: 100%;
    flex:1;
`;

export const Texts = styled.Text`
    font-size: 16px;
`;

export const ContentBody = styled.View`
    width: 80%;
    margin-left: 10%;
    margin-top: 5%;
    height: 90%;
`;

export const Header = styled.View`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const HeaderContentUser = styled.View`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
`;

export const Avatar = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: ${RFPercentage(50)}px;
`;

export const TextNameUser = styled.Text`
    font-family: 'OpenSans_600SemiBold';
    font-size:  ${RFValue(28)}px;
    color: white;
`;

export const Body = styled.View`
    width: 100%;
    height: 80%;
    margin-top: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const BodyButtons = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

`;
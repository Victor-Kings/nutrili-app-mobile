import styled from 'styled-components/native';


export const Button = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: #D5EAFD;
    width: 90%;
    align-self: center;
    margin-top: 15px;
    height: 60px;
`;

export const ContainerIcon = styled.View`
    padding-left: 0px;
    width: 50px;
`;

export const TextCustom = styled.Text`
    font-size: 22px;
    align-self: center;
    color: #8C8C8C;
    font-weight: 600;
    padding-left: 5px;
`;

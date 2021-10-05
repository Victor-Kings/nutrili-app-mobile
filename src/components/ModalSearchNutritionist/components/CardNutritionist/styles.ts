import styled from "styled-components/native";

export const Container = styled.View`
    background-color: white;
    margin: 5%;
    align-items: center;
    padding: 5%;
    border-radius: 4px;
`;

export const Name = styled.Text`
    font-weight: 600;
    font-style: normal;
    font-size: 24px;
    line-height: 33px;
    color: #494949;
`;

export const Infos = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: #6F6F6F;
    
`;

export const ImagePerfil = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 45px;
`;

export const ContainerScore = styled.View`
    flex-direction: row;
`;
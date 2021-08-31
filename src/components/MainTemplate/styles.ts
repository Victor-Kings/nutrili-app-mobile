import styled from 'styled-components/native';

export const ImagePerfil = styled.Image`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    border: 3px;
    border-color: #4197E5;
`;
export const Header = styled.View`
    height: 10%;
    flex:1;
    align-items: flex-start;
    justify-content: flex-end;
    padding-left: 5%;
    padding-bottom: 2%;
`;
export const HeaderContent = styled.View`
    align-items: center;
    flex-direction: row;
    width: 80%;
`;
export const TextHeader = styled.Text`
    padding-left:  5%;
    color: #4197E5;
    font-size: 28px;
    font-weight: 600;
`;

export const Container = styled.View`
    background-color: #F6F6F6;
    flex:1;
    flex-direction: column;
`;

export const MenuButton = styled.TouchableOpacity`
    background-color: #4197E5;
    align-self: flex-end;
    width: 100%;
    flex:1;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    color: white;
    padding-right: 5px;
    color: white;
    font-size: 20px;
    font-weight: 800;
   
`;
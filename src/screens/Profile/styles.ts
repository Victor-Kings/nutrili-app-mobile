import styled from 'styled-components/native';

export const ImagePerfil = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 60px;
    border-width: 3px;
    border-color: #4197E5;
`;

export const ImagePerfilContainer = styled.View`
`;

export const ContainerContent = styled.ScrollView`
    background-color: #F6F6F6;
    height: 75%;
`;

export const ContainerForm = styled.View`
    background-color: white;
    display: flex;
    flex: 1;
    margin: 4%;
    border-radius: 4px;
    padding-bottom: 2%;
    padding-top: 4%;
`;

export const HeaderContent = styled.View`
    align-items: center;
    padding-top: 15%;
`;

export const PickerContainer = styled.View`
    background-color: #DAEBFB;
    border-radius: 9px;
    width: 80%;
    margin-bottom: 5%;
    margin-left:  5%;
    border: 2px;
    border-color: #4197E5; 
`;

export const TextHeader = styled.Text`
    padding-left:  5%;
    color: #4197E5;
    font-size: 28px;
    font-weight: 600;
`;

export const TextContentForm = styled.Text`
    padding-left:  5%;
    color: #9ECEF9;
    font-size: 28px;
    font-weight: 600;
    padding-bottom: 5%;
`;

export const TextTittleForm = styled.Text`
    padding-left:  5%;
    color: #8C8C8C;
    font-size: 28px;
    font-weight: 600;
`;

export const ChangeImg = styled.TouchableOpacity`
    background-color: #4197E5;
    align-self: center;
    width: 50%;
    padding-top: 2%;
    padding-bottom: 2%;
    align-items: center;
    border-radius: 2px;
    justify-content: center;
    margin-bottom: 2%;
    margin-top: 2%;
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

export const InsertNumber = styled.TextInput`
    height: 50px;
    width: 50%;
    background-color: #DAEBFB;
    border-radius: 9px;
    border: 2px;
    border-color: #4197E5;
    margin-bottom: 5%;
    padding: 2%;
    color: gray;
    font-size: 20px;
    margin-left: 5%;
`;

export const ChangeButton = styled.TouchableOpacity`
    background-color: ${({theme}:any)=>theme=="approve"?"#4197E5":"red"};
    align-self: center;
    width: 48%;
    padding-top: 2%;
    padding-bottom: 2%;
    align-items: center;
    border-radius: 2px;
    justify-content: center;
    margin-bottom: 2%;
`;

export const TextChangeButton = styled.Text`
    color: white;
    color: white;
    font-size: 20px;
    font-weight: 800;
    text-align: center;
`;

export const TextButton = styled.Text`
    color: white;
    padding-right: 5px;
    color: white;
    font-size: 20px;
    font-weight: 800;
`;
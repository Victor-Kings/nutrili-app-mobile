import styled from 'styled-components/native';

export const ContainerButtons = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
`;
export const ContainerSingleButton = styled.View`
    width: 100%;
    align-items: center;
`;
export const ContainerInsertNumber = styled.View`
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
`;
export const InsertNumber = styled.TextInput`
    width: 50%;
    height: 100%;
    background-color: #DAEBFB;
    border-radius: 9px;
    margin-right: 2%;
    border: 2px;
    border-color: #4197E5;
    padding: 2%;
    font-size: 20px;
    color: gray;
`;
export const InsertText = styled.TextInput`
    height: 50px;
    width: 80%;
    background-color: #DAEBFB;
    border-radius: 9px;
    border: 2px;
    border-color: #4197E5;
    align-self: center;
    margin-bottom: 5%;
    padding: 2%;
    color: gray;
    font-size: 20px;
`;
export const PickerContainer = styled.View`
    background-color: #DAEBFB;
    border-radius: 9px;
    width: 80%;
    align-self: center;
    margin-bottom: 5%;
    border: 2px;
    border-color: #4197E5; 
`;
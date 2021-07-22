import styled from 'styled-components/native';

export const ContainerModal = styled.View`
    flex: 1;
    justify-content: center;
  
    margin: 10% 4%;
    background-color: burlywood;
    border-radius: 5px;
    padding: 0 8px;
`;

export const CardFood = styled.View`
    background-color: ${(props: any)=>props.color};
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
    background-color: ${(props: any)=>props.color};
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
    background-color: ${(props: any)=>props.color};
    align-self: center;

    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    color: white;
    font-size: 20px;//${(props: any)=> props.size}px;
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



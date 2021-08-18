import styled from 'styled-components/native';


export const Container = styled.View`
   align-items: center;
   background-color: #F6F6F6;
   width: 100%;
   height: 100%;
   padding-top: 20%;
`;

export const ContentContainer = styled.View`
   background-color: #FFFFFF;
   width: 90%;
   height: 80%;
    
`;

export const SquaresTopRight = styled.View`
   width: 500px;
   height: 100px;
   background-color:  #4197E5;
   position:absolute;
   top: 0px; left: 65%;
   transform: rotate(30deg);
`;

export const SquaresTopLeft = styled.View`
   width: 500px;
   height: 100px;
   background-color:  #4197E5;
   position:absolute;
   top: 30%; left: -98%;
   transform: rotate(-70deg);
`;

export const SquaresBottom = styled.View`
   width: 500px;
   height: 150px;
   background-color:  #4197E5;
   position:absolute;
   bottom: -30%; left: -10%;
   transform: rotate(12deg);
`;
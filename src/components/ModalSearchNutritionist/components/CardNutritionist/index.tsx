import React from "react";
import {Image, Text} from "react-native"
import { Container, ContainerScore, ImagePerfil, Infos, Name } from "./styles"
import {ButtonSmall} from '../../../../components/ButtonSmall/ButtonSmall'
import IconStartFilled from '../../../../assets/img/iconStarFilled.svg'
import IconStartVoid from '../../../../assets/img/iconStarVoid.svg'
import IconStarHalf from '../../../../assets/img/iconStarHalf.svg'
import {ICardNutritionistProps} from './CardNutriitionist.interface'

export const CardNutritionist = ({city, name, score: scoreProp, state, profilePicture, phone}:ICardNutritionistProps) =>{

    let score = scoreProp;
    
    let stars = [];
    let count = 5;

    while(score>0||count>0) {
        if(score>=2){
           stars.push(<IconStartFilled key={score+count}/>);
           count--;
           score-=2;
        }else if(score==1){
            stars.push(<IconStarHalf key={score+count}/>);
            score-=1;
            count--;
        }
        if(score==0&&count>0){
            stars.push(<IconStartVoid key={score+count}/>);
            count--;
        }
    }
    
    return(
        <Container>
            <ImagePerfil source={{uri:`${profilePicture}`}}/>
            <Name>
                {name}
            </Name>
            <Infos>
                {`${city}-${state}\n${phone}`}
            </Infos>
            <ContainerScore>
                {stars}
            </ContainerScore>
            <ButtonSmall buttonLabel="SELECIONAR" handlerClick={()=>console.log("INDO?")}/>
        </Container>
    )
}

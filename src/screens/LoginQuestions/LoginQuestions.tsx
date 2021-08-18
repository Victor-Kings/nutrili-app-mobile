import React,{useState} from "react";
import {Text} from "react-native"
import { Container,SquaresTopRight,SquaresTopLeft,SquaresBottom,ContentContainer} from "./styles";

export function LoginQuestions ({ navigation }:any){
    return(
        <Container>
            <SquaresTopLeft/>
            <SquaresTopRight/>
            <SquaresBottom/>
            <ContentContainer/>
        </Container>
    )
}

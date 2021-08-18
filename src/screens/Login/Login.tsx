import React,{useState} from "react";
import { PlaceHolder,Container,Title,ButtonTouch,TextButton,SquaresTopRight,SquaresTopLeft,SquaresBottom } from "./styles";
import {TextInputMask} from 'react-native-masked-text'
import Logo from "../../assets/img/LogoNutrili.svg"

export function Login ({ navigation }:any){
    const [number, onChangeNumber] = useState("");
    return(
        <Container>
            <Logo/>
            <Title>Insira seu telefone</Title>
            <SquaresTopLeft/>
            <SquaresTopRight/>
            <SquaresBottom/>
            <TextInputMask
                type={'cel-phone'}
                options={{
                    maskType:'BRL',
                    withDDD:true,
                    dddMark:'(99) '
                }}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="(19) 99999-9999"
                style={PlaceHolder}
                placeholderTextColor="#C9C9C9"
            />

           <ButtonTouch color ="#4197E5" onPress={() => navigation.goBack()}>
                <TextButton>ENTRAR</TextButton>
            </ButtonTouch>
        </Container>
    )
}

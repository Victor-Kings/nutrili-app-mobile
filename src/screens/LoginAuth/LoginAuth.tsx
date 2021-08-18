import React from "react";
import {Text} from "react-native";
import { Container,SquaresTopRight,SquaresTopLeft,SquaresBottom,ContentContainer,Title,TextContainer,ButtonTouch,TextButton,BackButtonContainer} from "./styles";
import {ButtonMenu} from "../../components/ButtonMenu/ButtonMenu"
import IconBack from "../../assets/img/iconBackBlue.svg";

export function LoginAuth ({...props  }:any){
    
    const handler = (page?:string) => {
        props.navigation.navigate(page);
    }

    return(
        <Container>
            <SquaresTopLeft/>
            <SquaresTopRight/>
            <SquaresBottom/>
            
            <ContentContainer>
                <BackButtonContainer>
                    <ButtonMenu
                    text="VOLTAR"
                    Icon={IconBack}
                    sizeText={18}
                    sizeImageHeight={70}
                    sizeImageWidth={70}
                    handleClick={handler}
                    page="Login"
                    />
                </BackButtonContainer>
                <TextContainer>
                    <Title>Vamos enviar um código por SMS para o seu telefone</Title>
                </TextContainer>
                <ButtonTouch color ="#4197E5" onPress={() => props.navigation.navigate('Login')}>
                    <TextButton>OK</TextButton>
                </ButtonTouch>
            </ContentContainer>
        </Container>
    )
}

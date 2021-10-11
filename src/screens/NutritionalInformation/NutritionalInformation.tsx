import React from "react";
import { ScrollView } from "react-native";
import { Container, Title, ContainerBox, Text } from "./styles";
import { IContentProps } from "./NutritionalInformation.interface";

const NutritionalInformation = ({ content }: IContentProps) => {
    return (
        <Container>
            <Title>INFORMAÇÕES NUTRICIONAIS</Title>
            <ContainerBox>
                {content.map((value, index) => (
                    <Text key={index}> {value.text} </Text>
                ))}
                
            </ContainerBox>
        </Container>
    )
}

export default NutritionalInformation;
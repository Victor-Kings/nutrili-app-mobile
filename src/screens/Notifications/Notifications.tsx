import React from "react";
import { ScrollView, Text } from "react-native";
import { Container, ContainerCard, Tittle, HeaderCard, ContainerContentCard } from "./styles";
import { IContentProps } from "./Notifications.interface";

const Notifications = ({ content }: IContentProps) => {
    return (
        <Container>
            <Tittle>NOTIFICAÇÕES</Tittle>
            <ScrollView style={{ flex: 1, width: "100%", paddingHorizontal: "1%" }}>
                {
                    content.map((value, index) => {
                        return (
                            <ContainerCard key={`${value.sender}-${index}`}>

                                <HeaderCard>
                                    <Tittle size={'20'}>{value.sender}</Tittle>
                                    <Tittle size={'20'} color={"#67B1F4"}>{value.isNew ? "NOVA" : ""}</Tittle>
                                </HeaderCard>
                                <Text style={{ color: "#707070" }}>{value.message}</Text>
                            </ContainerCard>
                        )
                    })
                }
            </ScrollView>
        </Container>
    )
}

export default Notifications;
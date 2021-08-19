import React, { useState } from "react";
import { PlaceHolder, Container, Title, ButtonTouch, TextButton, SquaresTopRight, SquaresTopLeft } from "./styles";
import { TextInputMask } from 'react-native-masked-text'
import Logo from "../../assets/img/LogoNutrili.svg"
import { KeyboardAvoidingView, ScrollView } from "react-native"
export function Login({ navigation }: any) {
    const [number, onChangeNumber] = useState("");
    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={-200}
            behavior={"padding"}
            style={{ flex: 1, backgroundColor: "#F6F6F6" }}
        >
            <ScrollView style={{ flex: 1, backgroundColor: "#F6F6F6" }}>
                <Container>
                    <SquaresTopLeft />
                    <SquaresTopRight />
                    <Logo />
                    <Title>Insira seu telefone</Title>

                    <TextInputMask
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMark: '(99) '
                        }}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="(19) 99999-9999"
                        style={PlaceHolder}
                        placeholderTextColor="#C9C9C9"
                    />
                    <ButtonTouch color="#4197E5" onPress={() => navigation.navigate('LoginAuth')}>
                        <TextButton>ENTRAR</TextButton>
                    </ButtonTouch>
                </Container>
                {/* <SquaresBottom /> */}
            </ScrollView>

        </KeyboardAvoidingView>
    )
}

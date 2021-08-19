import React, { useState, useEffect } from "react";
import { TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import {
    Container,
    SquaresTopRight,
    SquaresTopLeft,
    SquaresBottom,
    ContentContainer,
    Title,
    TextContainer,
    ButtonTouch,
    TextButton,
    BackButtonContainer,
    TextBody,
    InputCode
} from "./styles";
import { ButtonMenu } from "../../components/ButtonMenu/ButtonMenu";
import IconBack from "../../assets/img/iconBackBlue.svg";

export function LoginAuth({ ...props }: any) {
    const [consentedSms, setConsentedSms] = useState(false)
    const [code, onChangeCode] = useState<any>()

    const handler = (page?: string) => {
        props.navigation.navigate(page);
    }
    const [timer, setTimer] = React.useState(60);
    const id: any = React.useRef(null);

    const clear = () => {
        window.clearInterval(id.current);
    };

    async function downTimer() {
        id.current = window.setInterval(() => {
            setTimer((time) => time - 1);
        }, 1000);
        return () => clear();
    }

    useEffect(() => {
        if (timer === 0) {
            clear();
            setTimer(60)
            downTimer()
        }
    }, [timer]);

    useEffect(() => {
        if (code == "ABCD1234") {
            props.navigation.navigate('LoginQuestion')
        }
    }, [code])

    const AuthScreen = () => {
        if (!consentedSms) {
            return (
                <>
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
                    <ButtonTouch color="#4197E5" onPress={() => { setConsentedSms(true); downTimer() }}>
                        <TextButton>OK</TextButton>
                    </ButtonTouch>
                </>
            );
        }
        return (
            <KeyboardAvoidingView
                keyboardVerticalOffset={-200}
                behavior={"padding"}
                style={{ flex: 1, alignItems: "center", width: "100%" }}
            >
                <ScrollView style={{ flex: 1, width: "100%", alignContent: "center" }}>
                    <TextContainer>
                        <Title>Isso pode levar{"\n"} alguns segundos...</Title>
                        <TextBody color="#56A1E6">Insira o código</TextBody>
                    </TextContainer>
                    <TextInput
                        onChangeText={onChangeCode}
                        value={code}
                        placeholder="CD23KIUJ"
                        style={InputCode}
                        placeholderTextColor="#C9C9C9"
                    />
                    <TextBody color="#aaaaaa" marginBottom="20px">Código será reenviado {"\n"}em {timer}s</TextBody>
                    <TextBody color="#000000" marginBottom="20px" onPress={() => props.navigation.navigate('Login')}>Alterar telefone</TextBody>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }

    return (
        <Container>
            <SquaresTopLeft />
            <SquaresTopRight />
            <ContentContainer>
                {AuthScreen()}
            </ContentContainer>
            <SquaresBottom />
        </Container>
    )
}

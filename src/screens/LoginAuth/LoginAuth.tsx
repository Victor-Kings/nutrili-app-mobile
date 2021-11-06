import React, { useState, useEffect } from "react";
import { TextInput, KeyboardAvoidingView, ScrollView, Alert } from "react-native";
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
  InputCode,
} from "./styles";
import { ButtonMenu } from "../../components/ButtonMenu/ButtonMenu";
import IconBack from "../../assets/img/iconBackBlue.svg";
import { useAuthContext } from "../../context/authContext";
import { AuthService } from "../../services/AutheService/AuthService";

export function LoginAuth({ ...props }: any) {
  const authService = new AuthService();
  const [consentedSms, setConsentedSms] = useState(false);
  const [code, onChangeCode] = useState<string>("");
  const [initialTime, setInitialTime] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  const { signIn }: any = useAuthContext();
  const phoneNumber: string = props.route.params.phoneNumber;

  const handler = (page?: string) => {
    props.navigation.navigate(page);
  };

  useEffect(() => {
    var controle = true;

    if (initialTime > 0) {
      setTimeout(() => {
        if (controle) {
          setInitialTime(initialTime - 1);
        }
      }, 1000);
    }

    if (initialTime === 0 && startTimer) {
      if (controle) {
        setStartTimer(false);
      }
    }

    return function cleanUp() {
      controle = false;
    };

  }, [initialTime, consentedSms]);

  const handleOnClick = async () => {
    await authService.sendNumberToReceiverSMSToken(phoneNumber);
    setInitialTime(60);
    setConsentedSms(true);
  };

  useEffect(() => {
    if (code.length === 6) {
      (async () => {
        try {        
          await signIn(phoneNumber.toUpperCase(), code);
          props.navigation.navigate("LoginQuestion");
        } catch (error) {
          Alert.alert("Ocorreu alguem erro no login");
        }
      })();
    }
  }, [code]);

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
          <ButtonTouch color="#4197E5" onPress={handleOnClick}>
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
            placeholder="CD23KJ"
            style={InputCode}
            placeholderTextColor="#C9C9C9"
          />
          <TextBody color="#aaaaaa" marginBottom="20px">
            Código será reenviado {"\n"}em {initialTime}s
          </TextBody>
          <TextBody
            color="#000000"
            marginBottom="20px"
            onPress={() => props.navigation.navigate("Login")}
          >
            Alterar telefone
          </TextBody>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };

  return (
    <Container>
      <SquaresTopLeft />
      <SquaresTopRight />
      <ContentContainer>{AuthScreen()}</ContentContainer>
      <SquaresBottom />
    </Container>
  );
}

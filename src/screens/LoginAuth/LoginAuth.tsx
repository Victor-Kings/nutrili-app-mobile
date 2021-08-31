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
  InputCode,
} from "./styles";
import { ButtonMenu } from "../../components/ButtonMenu/ButtonMenu";
import IconBack from "../../assets/img/iconBackBlue.svg";
import { useAuthContext } from '../../context/authContext'
import { apiBackend } from "../../configs/api";

export function LoginAuth({ ...props }: any) {
  const [consentedSms, setConsentedSms] = useState(false);
  const [code, onChangeCode] = useState<any>('');
  const [initialTime, setInitialTime] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  const { setUserToken, userToken }: any = useAuthContext();
  const phoneNumber = props.route.params.phoneNumber;
  const requestSmsToken = async () => (
    apiBackend.post("/user/smsToken", {
      phone: phoneNumber
    }, {
      headers: {
        "AOBARIZATION": "Aoba dGVzdGU6MTIzNDU=",
      }
    })
  )
  //console.log("AAAA", userToken.data.access_token)

  const confirmSmsToken = async () => {
    var bodyFormData = new FormData();

    bodyFormData.append('grant_type', 'password')
    bodyFormData.append('username', `${phoneNumber}:2:${code}`)
    bodyFormData.append('password', 'vintao20')

    return apiBackend.post("/user/smsToken", bodyFormData, {
      headers: {
        "Authorization": "Basic dGVzdGU6MTIzNDU=",
      }
    })
  }

  const handler = (page?: string) => {
    props.navigation.navigate(page);
  };

  useEffect(() => {
    if (initialTime > 0) {
      setTimeout(() => {
        setInitialTime(initialTime - 1);
      }, 1000);
    }

    if (initialTime === 0 && startTimer) {
      setStartTimer(false);
    }
  }, [initialTime, consentedSms]);

  const handleOnClick = async () => {
    //requestSmsToken();
    console.log("OBVA", phoneNumber)
    apiBackend.post("/user/smsToken", {}, {
      params: { phone: phoneNumber },
      headers: {
        "AOBARIZATION": "Aoba dGVzdGU6MTIzNDU=",
      }
    }).then((response) => console.log(response))
    setInitialTime(60);
    setConsentedSms(true);
  };

  useEffect(() => {
    if (code.length == 8) {
      var bodyFormData = new FormData();
      console.log(phoneNumber, code)
      bodyFormData.append('grant_type', 'password')
      bodyFormData.append('username', `${phoneNumber}:2:${code}`)
      bodyFormData.append('password', 'vintao20')

      apiBackend.post("/oauth/token", bodyFormData, {
        headers: {
          "Authorization": "Basic dGVzdGU6MTIzNDU=",
        }
      }).then((response: any) => {
        //TODO: verificar erros
        console.log(response.data.access_token)
        setUserToken(response.data.access_token);
        props.navigation.navigate("LoginQuestion");
      })
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
            placeholder="CD23KIUJ"
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

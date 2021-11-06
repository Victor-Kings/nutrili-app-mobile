import React, { useRef, useState } from "react";

import {
  PlaceHolder,
  Container,
  Title,
  ButtonTouch,
  TextButton,
  SquaresTopRight,
  SquaresTopLeft,
} from "./styles";
import { TextInputMask } from "react-native-masked-text";
import Logo from "../../assets/img/LogoNutrili.svg";
import { Alert, KeyboardAvoidingView, ScrollView } from "react-native";

export function Login({ navigation }: any) {
  const [number, onChangeNumber] = useState("");
  const numberRef = useRef<any>(null);


  const handlerLogin = () => {
    const numberUnmask = numberRef.current.getRawValue();
    if (numberUnmask && numberUnmask.length == 11) {
      navigation.navigate("LoginAuth", { phoneNumber: numberUnmask })
    } else {
      Alert.alert("Digite um numero de telefone")
    }
  }
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
            type={"cel-phone"}
            options={{
              maskType: "BRL",
              withDDD: true,
              dddMask: '(99) ',
            }}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="(19) 99999-9999"
            style={PlaceHolder}
            placeholderTextColor="#C9C9C9"
            ref={numberRef}
          />
          <ButtonTouch
            color="#4197E5"
            onPress={handlerLogin}
          >
            <TextButton>ENTRAR</TextButton>
          </ButtonTouch>
        </Container>
        {/* <SquaresBottom /> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

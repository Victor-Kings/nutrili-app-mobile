import React, { useRef, useState } from "react";
import { Alert } from "react-native";
import { IInsertCustomProps } from "./InsertCustom.interface";
import { Picker } from "@react-native-picker/picker";
import { ButtonTouch, TextButton } from "../styles";
import {
  ContainerButtons,
  ContainerSingleButton,
  InsertNumber,
  InsertText,
  ContainerInsertNumber,
  PickerContainer,
} from "./styles";
import { Text } from "react-native";

export function InsertsCustom({ handleOnchange, content }: IInsertCustomProps) {
  const pickerRef = useRef<any>();
  const [myState, setMyState] = useState<any>("");

  const [response, setResponse] = useState("");

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const handlerNextQuestion = () => {
    if (response != "") {
      handleOnchange(response);
      setResponse("");
    } else {
      Alert.alert("Campo inválido")
    }
  };

  const handlerResponse = (value: string) => {
    console.log("HANDLE VALUE: " + value);
    setResponse(value);
  };

  function formatDate(value: string) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1");
  }

  const buttonNext = (
    <ContainerSingleButton>
      <ButtonTouch color="#4197E5" onPress={handlerNextQuestion}>
        <TextButton>AVANÇAR</TextButton>
      </ButtonTouch>
    </ContainerSingleButton>
  );

  if (content.typeAnswer == "insertText") {
    return (
      <>
        <InsertText
          onChangeText={handlerResponse}
          value={response}
          placeholder={content.placeholder}
        />
        {buttonNext}
      </>
    );
  }

  if (content.typeAnswer == "insertCustom") {
    return (
      <>
        <PickerContainer>
          <Picker
            ref={pickerRef}
            selectedValue={response}
            onValueChange={(itemValue, itemIndex) => handlerResponse(itemValue)}
            dropdownIconColor="#84878a"
            itemStyle={{ fontSize: 20, fontWeight: "700" }}
          >
            {content?.checkQuestions?.fields &&
              content.checkQuestions.fields.map((value, index) => (
                <Picker.Item
                  label={value}
                  value={value}
                  key={index}
                  color="#84878a"
                />
              ))}
          </Picker>
        </PickerContainer>
        {buttonNext}
      </>
    );
  }

  if (content.typeAnswer == "data") {
    return (
      <>
        <InsertText
          onChangeText={handlerResponse}
          value={formatDate(response)}
          placeholder={content.placeholder}
        />
        {buttonNext}
      </>
    );
  }

  if (content.typeAnswer == "insertNumber") {
    return (
      <>
        <ContainerInsertNumber>
          <InsertNumber
            onChangeText={handlerResponse}
            value={response}
            placeholder={content.placeholder}
            keyboardType="number-pad"
          />
          <Text style={{ fontSize: 20, color: "#6D6D6D" }}>
            {content.unityMeasure}
          </Text>
        </ContainerInsertNumber>

        {buttonNext}
      </>
    );
  }

  if (content.typeAnswer == "bool") {
    return (
      <ContainerButtons>
        <ButtonTouch
          color="#4197E5"
          onPress={() => {
            handleOnchange("yes");
            setResponse("");
          }}
        >
          <TextButton>SIM</TextButton>
        </ButtonTouch>

        <ButtonTouch
          color="#d8000b"
          onPress={() => {
            handleOnchange("no");
            setResponse("");
          }}
          style={{ marginLeft: 5 }}
        >
          <TextButton>NÃO</TextButton>
        </ButtonTouch>
      </ContainerButtons>
    );
  }
  return <></>;
}

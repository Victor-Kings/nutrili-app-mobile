import React, { useRef } from "react";
import { View, Button, Text } from "react-native";
import { IInsertCustomProps } from "./InsertCustom.interface";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import styled from "styled-components/native";

const Input = styled.TextInput`
  height: 50px;
  margin: 12px;
  border-width: 2px;
  padding: 10px;
  border-color: #4197e5;
  border-radius: 4px;
  background-color: #daebfb;
`;

const ButtonCustom = styled.TouchableOpacity`
  height: 50px;
  background-color: #4197e5;
  border-radius: 4px;
  width: 136px;
  align-items: center;
  justify-content: center;
`;

const ButtonCustomRed = styled.TouchableOpacity`
  height: 50px;
  background-color: #d93f3f;
  border-radius: 4px;
  width: 136px;
  align-items: center;
  justify-content: center;
`;

const TextCustom = styled.Text`
  font-family: "OpenSans_600SemiBold";
  color: white;
  font-size: 22px;
`;

export function InsertsCustom({
  type,
  value,
  handleOnchange,
  placeholder,
  picker,
}: IInsertCustomProps) {
  const pickerRef = useRef<any>();
  const [myState, setMyState] = useState<any>("");

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  function format(mask: string, number: string) {
    var s = "" + number,
      r = "";
    for (var im = 0, is = 0; im < mask.length && is < s.length; im++) {
      r += mask.charAt(im) == "X" ? s.charAt(is++) : mask.charAt(im);
    }
    return r;
  }

  function handleClick() {
    handleOnchange(myState);
  }

  if (type == "insertText") {
    return (
      <View>
        <Input
          onChangeText={setMyState}
          value={myState}
          placeholder={placeholder}
        />
        <View style={{ alignItems: "center" }}>
          <ButtonCustom onPress={handleClick}>
            <TextCustom>AVANÇAR</TextCustom>
          </ButtonCustom>
        </View>
      </View>
    );
  }
  if (type == "insertCustom") {
    console.log(picker)
    return (
      <Picker
      style={{backgroundColor:"#4197e5"}}
        ref={pickerRef}
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => handleOnchange(itemValue)}
      >
        {picker &&
          picker.map((value) => 
            <Picker.Item label={value} value={value} />
          )}
      </Picker>
    );
  }
  if (type == "data") {
    return (
      <Input
        onChangeText={handleOnchange}
        value={format("XX/XX/XXXX", value)}
        placeholder={placeholder}
      />
    );
  }
  if (type == "insertNumber") {
    return (
      <Input
        onChangeText={handleOnchange}
        value={value}
        placeholder={placeholder}
        keyboardType="number-pad"
      />
    );
  }
  if (type == "bool") {
    return (
      <View style={{flexDirection:"row", justifyContent:"space-around"}}>
        <ButtonCustom onPress={handleClick}>
          <TextCustom>SIM</TextCustom>
        </ButtonCustom>
        <ButtonCustomRed onPress={handleClick}>
          <TextCustom>NÃO</TextCustom>
        </ButtonCustomRed>
      </View>
    );
  }
  return (<></>)
}

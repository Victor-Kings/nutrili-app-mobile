import React, { useRef } from "react";
import { TextInput, Button } from "react-native";
import { IInsertCustomProps } from "./InsertCustom.interface";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export function InsertsCustom({
  type,
  value,
  handleOnchange,
  placeholder,
  picker,
}: IInsertCustomProps) {
  const pickerRef = useRef<any>();

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
  if (type == "insertText") {
    return (
      <TextInput
        onChangeText={handleOnchange}
        value={value}
        placeholder={placeholder}
      />
    );
  }
  if (type == "insertCustom") {
    return (
      <Picker
        ref={pickerRef}
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => handleOnchange(itemValue)}
      >
        {picker &&
          picker.map((value) => {
            <Picker.Item label={value} value={value} />;
          })}
      </Picker>
    );
  }
  if (type == "data") {
    return (
      <TextInput
        onChangeText={handleOnchange}
        value={format("XX/XX/XXXX", value)}
        placeholder={placeholder}
      />
    );
  }
  if (type == "insertNumber") {
    return (
      <TextInput
        onChangeText={handleOnchange}
        value={value}
        placeholder={placeholder}
        keyboardType="number-pad"
      />
    );
  }
  if (type == "bool") {
    return (
      <>
        <Button
          onPress={() => handleOnchange}
          title="Sim"
          color="#841584"
          accessibilityLabel="Button Yessss"
        />
        <Button
          onPress={() => handleOnchange}
          title="Não"
          color="red"
          accessibilityLabel="Button Nops"
        />
      </>
    );
  }
  return(<></>)
}

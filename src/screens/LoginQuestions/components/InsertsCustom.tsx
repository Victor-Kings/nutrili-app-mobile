import React, { useRef, useState } from "react";
import { TextInput, Button } from "react-native";
import { IInsertCustomProps } from "./InsertCustom.interface";
import { Picker } from "@react-native-picker/picker";

export function InsertsCustom({
  type,
  handleOnchange,
  placeholder,
  picker,
}: IInsertCustomProps) {
  const pickerRef = useRef<any>();

  const [response, setResponse] = useState("");

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const handlerNextQuestion = () => {
    console.log("dentro", response)
    handleOnchange(response)
    console.log(response)
    setResponse("")
  }

  const handlerResponse = (value: string) => {
    setResponse(value)
  }

  function format(mask: string, number: string) {
    var s = "" + number,
      r = "";
    for (var im = 0, is = 0; im < mask.length && is < s.length; im++) {
      r += mask.charAt(im) == "X" ? s.charAt(is++) : mask.charAt(im);
    }
    return r;
  }

  const buttonNext = (
    <Button
      onPress={handlerNextQuestion}
      title="PROXIMO"
      color="blue"
      accessibilityLabel="Button Next"
    />
  );

  if (type == "insertText") {
    return (
      <>
        <TextInput
          onChangeText={handlerResponse}
          value={response}
          placeholder={placeholder}
        />

        {buttonNext}
      </>
    );
  }

  if (type == "insertCustom") {
    return (
      <>
        <Picker
          ref={pickerRef}
          selectedValue={response}
          onValueChange={(itemValue, itemIndex) => handlerResponse(itemValue)}
        >

          {picker && picker.map((value, index) =>
            <Picker.Item label={value} value={value} key={index} />
          )}

        </Picker>
        {buttonNext}
      </>
    );
  }

  if (type == "data") {
    return (
      <>
        <TextInput
          onChangeText={handlerResponse}
          value={format("XX/XX/XXXX", response)}
          placeholder={placeholder}
        />
        {buttonNext}
      </>
    );
  }

  if (type == "insertNumber") {
    return (
      <>
        <TextInput
          onChangeText={handlerResponse}
          value={response}
          placeholder={placeholder}
          keyboardType="number-pad"
        />
        {buttonNext}
      </>
    );
  }

  if (type == "bool") {
    return (
      <>
        <Button
          onPress={() => { handleOnchange("yes"); setResponse("") }}
          title="Sim"
          color="#841584"
          accessibilityLabel="Button Yessss"
        />
        <Button
          onPress={() => { handleOnchange("no"); setResponse("") }}
          title="Não"
          color="red"
          accessibilityLabel="Button Nops"
        />
      </>
    );
  }
  return (<></>)
}

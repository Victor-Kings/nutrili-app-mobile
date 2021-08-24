import React, { useRef, useState } from "react";
import { TextInput, Button } from "react-native";
import { IInsertCustomProps } from "./InsertCustom.interface";
import { Picker } from "@react-native-picker/picker";

export function InsertsCustom({
  handleOnchange,
  content,
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
    handleOnchange(response)
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

  if (content.typeAnswer == "insertText") {
    return (
      <>
        <TextInput
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
        <Picker
          ref={pickerRef}
          selectedValue={response}
          onValueChange={(itemValue, itemIndex) => handlerResponse(itemValue)}
        >

          {content.checkQuestions.fields && content.checkQuestions.fields.map((value, index) =>
            <Picker.Item label={value} value={value} key={index} />
          )}

        </Picker>
        {buttonNext}
      </>
    );
  }

  if (content.typeAnswer == "data") {
    return (
      <>
        <TextInput
          onChangeText={handlerResponse}
          value={format("XX/XX/XXXX", response)}
          placeholder={content.placeholder}
        />
        {buttonNext}
      </>
    );
  }

  if (content.typeAnswer == "insertNumber") {
    return (
      <>
        <TextInput
          onChangeText={handlerResponse}
          value={response}
          placeholder={content.placeholder}
          keyboardType="number-pad"
        />
        {buttonNext}
      </>
    );
  }

  if (content.typeAnswer == "bool") {
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

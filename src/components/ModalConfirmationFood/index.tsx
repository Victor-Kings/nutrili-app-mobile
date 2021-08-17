import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import IconAddFood from "../../assets/img/iconAddFood.svg";
import {
  ContainerModal,
  CardFood,
  TextCardFood,
  ButtonTouch,
  TextButton,
  ContainerViews,
  ContainerButtons,
  CardAddFood,
  TextHeader,
} from "./styles";

import Input from "./components/Input";
interface IMap {
  value: string;
  i: number;
}
const ModalConfirmationFood = ({
  modalOpen,
  handleModal,
  capturedPhoto,
  responseFood,
}: any) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [addFood, setAddFood] = useState<boolean>(false);
  const [listFood, setListFood] = useState<any>(responseFood||[""]);

  useEffect(() => {
    setListFood(responseFood||[""]);
  }, [responseFood]);

  const removeItem = (value: string) => {
    const list = listFood.filter((item: string) => item !== value);
    setListFood(list);
  };
  const handlerAddFood = (food: string) => {
    listFood.push(food);
    setListFood([...listFood]);
  };
  const confirmationButton = () => {
    if (edit) setEdit(false);
    else handleModal();
  };
  const buttonText = !edit ? (
    <TextButton size={24}>CONFIRMAR</TextButton>
  ) : (
    <TextButton size={20}>SALVAR ALTERAÇÕES</TextButton>
  );
  return (
    <Modal animationType="slide" transparent={false} visible={modalOpen}>
      <View style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <ContainerModal
          enabled
          behavior={Platform.OS === "android" ? "height" : "padding"}
        >
          <ScrollView keyboardShouldPersistTaps="handled">
            <TextHeader>Alimentos Encontrados:</TextHeader>
            <ContainerViews>
              {listFood.map((value: string, i: number) => (
                <CardFood key={`${value}${i}`} color="#fff">
                  <TextCardFood>{`\u2022 ${value}`}</TextCardFood>
                  {edit && (
                    <TouchableOpacity
                      style={{ backgroundColor: "black" }}
                      onPress={() => removeItem(value)}
                    >
                      <Text style={{ color: "red" }}>Remove</Text>
                    </TouchableOpacity>
                  )}
                </CardFood>
              ))}
              {addFood && edit && <Input handlerAddFood={handlerAddFood} />}
              {edit && (
                <CardAddFood
                  onPress={() => {
                    setAddFood(true);
                  }}
                >
                  <TextCardFood style={{ color: "#4197E5" }}>
                    Adicionar Alimento
                  </TextCardFood>
                  <IconAddFood />
                </CardAddFood>
              )}
            </ContainerViews>
            <ContainerButtons>
              <ButtonTouch color="#4197E5" onPress={() => confirmationButton()}>
                <TextButton>{buttonText}</TextButton>
              </ButtonTouch>

              <ButtonTouch
                color="#D93F3F"
                onPress={() => setEdit(true)}
                style={{ marginVertical: "2%" }}
              >
                <TextButton>EDITAR</TextButton>
              </ButtonTouch>
            </ContainerButtons>
          </ScrollView>
        </ContainerModal>
      </View>
    </Modal>
  );
};

export default ModalConfirmationFood;

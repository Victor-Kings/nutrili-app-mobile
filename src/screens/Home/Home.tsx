import React, { useState, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import { Container, ButtonPhoto } from "./styles";
import { Camera } from "expo-camera";
import { useIsFocused } from '@react-navigation/native';

import MainCamera from "../../components/MainCamera";
import ModalConfirmationFood from "../../components/ModalConfirmationFood";
import { SendFoodsArrayService } from "../../services/SendFoodsArrayService/SendFoodsArrayService";
import { SendImageService } from "../../services/SendImageService/SendImageService";
import { useFocusEffect } from "@react-navigation/native";

function ArrayOrganizeFoods(data: any) {
  var foods = [];
  for (let food of data) {
    foods.push(food.food);
  }

  return foods;
}

const Home = () => {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [responseFood, setResponseFood] = useState<any>();
  const camRef = useRef<any>(null);
  const [capturedPhoto, setcapturedPhoto] = useState<any>(null);
  const isFocused = useIsFocused();

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(()=>{
      let controle = true;
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
       if (controle) {
          setHasPermission(true);
      }
      })();
      
      return function cleanUp() {
        controle = false;
      };
  }, [])

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Acesso negado!</Text>;
  }

  async function takePhoto() {
    // TODO: precisa de um loading ate a resposta da IA
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      await sendImageIA(data);
      setcapturedPhoto(data.uri);
      setModalOpen(true);
    }
  }

  const handleModal = async (foods:string[]) => {
    setModalOpen(false);
    try {
      await new SendFoodsArrayService().execute(foods);
    } catch (error) {
      console.error("Erro ao enviar os alimentos para a API");
    }
  };

  async function sendImageIA(ImageData: any) {
    try {
      const recognizedFoods = await new SendImageService().execute(ImageData);
      setResponseFood(recognizedFoods);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      {isFocused && <MainCamera camRef={camRef} />}
      <ButtonPhoto onPress={takePhoto}>
        <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
          TIRAR FOTO DA REFEIÇÃO
        </Text>
      </ButtonPhoto>
      {capturedPhoto && responseFood && (
        <ModalConfirmationFood
          modalOpen={modalOpen}
          responseFood={responseFood}
          handleModal={handleModal}
          capturedPhoto={capturedPhoto}
        />
      )}
    </Container>
  );
};

export default Home;

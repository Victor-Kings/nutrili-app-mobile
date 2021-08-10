import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Modal, Image } from "react-native";
import { Container, ButtonPhoto } from "./styles";
import { Camera } from "expo-camera";

import MainCamera from "../../components/MainCamera";
import ModalConfirmationFood from "../../components/ModalConfirmationFood";
import FormData from "form-data";
import api from "../../service/api";



const Home = ({}) => {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [responseFood, setResponseFood] = useState<any>(null);
  const camRef = useRef<any>(null);
  const [capturedPhoto, setcapturedPhoto] = useState<any>(null);

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Acesso negado!</Text>;
  }

  async function takePhoto() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      await sendImageIA(data);
      setcapturedPhoto(data.uri);
      setModalOpen(true);
      console.log(data);
    }
  }

  const handleModal = () => {
    setModalOpen(false);
  };

  async function  sendImageIA( ImageData: any) {
    var form = new FormData();

    const FoodFound = {
        Foods: ["Arroz", "Cenoura", "Tomate", "Alface", "Carne Bovina", "Feijão"],
      };
    form.append("file1", {
      type: "image/jpeg",
      name: `alimento.jpg`,
      uri: ImageData.uri,
    });
    await api
    .post("/postImg", form, {
        headers: {
        "Content-Type": "multipart/form-data",
        },
    })
    .then((apiResponse) => setResponseFood(FoodFound))
    .catch((error)=>{
        console.log(error)
    })
  }

  return (
    <Container>
      <MainCamera camRef={camRef} />
      <ButtonPhoto onPress={takePhoto}>
        <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
          TIRAR FOTO DA REFEIÇÃO
        </Text>
      </ButtonPhoto>
      {capturedPhoto && responseFood && (
        <ModalConfirmationFood
          modalOpen={modalOpen}
          responseFood={responseFood.Foods}
          handleModal={handleModal}
          capturedPhoto={capturedPhoto}
        />
      )}
    </Container>
  );
};

export default Home;

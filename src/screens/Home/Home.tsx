import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Modal, Image } from "react-native";
import { Container, ButtonPhoto } from "./styles";
import { Camera } from "expo-camera";

import MainCamera from "../../components/MainCamera";
import ModalConfirmationFood from "../../components/ModalConfirmationFood";
import FormData from "form-data";
import { apiRecognize } from "../../service/api";

function ArrayOrganizeFoods(data: any) {
  var foods = [];
  for (let food of data) {
    foods.push(food.food)
  }

  return foods
}

const Home = () => {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [responseFood, setResponseFood] = useState<any>();
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
    console.log("FetchingInfos...")
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      await sendImageIA(data);
      setcapturedPhoto(data.uri);
      setModalOpen(true);
    }
  }

  const handleModal = async () => {
    setModalOpen(false);
    await apiRecognize.post("/post_recognized_foods", {
      Recognized_Foods: responseFood
    })
      .then((apiResponse) => { console.log(apiResponse.data) })
  };

  async function sendImageIA(ImageData: any) {
    var form = new FormData();
    form.append("file1", {
      type: "image/jpeg",
      name: `alimento.jpg`,
      uri: ImageData.uri,
    });
    await apiRecognize
      .post("/post_image", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((apiResponse) => {
        setResponseFood(apiResponse.data.Recognized_Foods)
      })
      .catch((error) => {
        console.error(error)
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
          responseFood={responseFood}
          handleModal={handleModal}
          capturedPhoto={capturedPhoto}
        />
      )}
    </Container>
  );
};

export default Home;

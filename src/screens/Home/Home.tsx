import React, { useState, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import { Container, ButtonPhoto } from "./styles";
import { Camera } from "expo-camera";

import MainCamera from "../../components/MainCamera";
import ModalConfirmationFood from "../../components/ModalConfirmationFood";
import { SendFoodsArrayService } from "../../services/SendFoodsArrayService/SendFoodsArrayService";
import { SendImageService } from "../../services/SendImageService/SendImageService";
import { apiBackendAuthenticated } from "../../configs/api";
import { useAuthContext } from "../../context/authContext";
import { AxiosError } from "axios";

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

  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    let controle = true;
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      if (controle) {
        setHasPermission(status === "granted");
      }
    })();
    
    return function cleanUp() {
      controle = false;
    };
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Acesso negado!</Text>;
  }

  async function takePhoto() {
    console.log("FetchingInfos...");
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      await sendImageIA(data);
      setcapturedPhoto(data.uri);
      setModalOpen(true);
    }
  }

  const handleModal = async () => {
    setModalOpen(false);
    try {
      const data = await new SendFoodsArrayService().execute(responseFood);
      console.log(data);
    } catch (error) {
      console.log("[ERROR]");
    }
    // await api.post("/post_recognized_foods",{
    //   Recognized_Foods: responseFood
    // })
    // .then((apiResponse) => { console.log(apiResponse.data) })
  };

  async function sendImageIA(ImageData: any) {
    try {
      const recognizedFoods = new SendImageService().execute(ImageData);
      setResponseFood(recognizedFoods);
    } catch (error) {
      console.error(error);
    }

    // var form = new FormData();
    // form.append("file1", {
    //   type: "image/jpeg",
    //   name: `alimento.jpg`,
    //   uri: ImageData.uri,
    // });
    // await api
    // .post("/post_image", form, {
    //     headers: {
    //     "Content-Type": "multipart/form-data",
    //     },
    // })
    // .then((apiResponse) => {
    //   setResponseFood(apiResponse.data.Recognized_Foods)
    // })
    // .catch((error)=>{
    //     console.error(error)
    // })
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

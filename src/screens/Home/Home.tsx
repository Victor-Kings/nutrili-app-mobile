import React,{ useState, useEffect, useRef } from "react";
import { View, Text,TouchableOpacity, Modal, Image } from "react-native";
import { Container, ButtonPhoto } from './styles';
import {Camera} from 'expo-camera';

import MainCamera from '../../components/MainCamera';
import ModalConfirmationFood from "../../components/ModalConfirmationFood";


function sendImageIA({ImageData} :any){
    //TO DO send Image to backend IA
    const FoodFound = {
        Foods: ['Arroz', 'Cenoura','Tomate','Alface','Carne Bovina','Feijão']
    }
    return FoodFound;
}
const Home = ({}) =>{

    const [hasPermission,setHasPermission] = useState<any>(null);
    const [responseFood, setResponseFood] = useState<any>(null);
    const camRef= useRef<any>(null);
    const [capturedPhoto, setcapturedPhoto] = useState<any>(null);

    const[modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        (async() => {
            const{ status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    },[]);

    if(hasPermission === null){
        return <View/>;
    }

    if(hasPermission === false){
        return <Text>Acesso negado!</Text>
    }
    async function  takePhoto() {
        if(camRef){
            const data = await camRef.current.takePictureAsync();
            setResponseFood(sendImageIA( data.uri ));
            setcapturedPhoto(data.uri);
            setModalOpen(true);
            console.log(data);
        }
    }

    const handleModal = ()=>{
        setModalOpen(false)
    }

    return(
        <Container >
            <MainCamera camRef={camRef}/>
            <ButtonPhoto onPress={takePhoto}>
                <Text style={{color:'white',fontSize: 20, textAlign:'center'}}>
                    TIRAR FOTO DA REFEIÇÃO
                </Text>
            </ButtonPhoto>
            {capturedPhoto&&responseFood&&
                <ModalConfirmationFood modalOpen={modalOpen} responseFood={responseFood.Foods} handleModal={handleModal} capturedPhoto={capturedPhoto} />
            }

        </Container>
    )
}

export default Home;
import React,{ useState, useEffect, useRef } from "react";
import { View, Text,TouchableOpacity, Modal, Image } from "react-native";
import { Container, ContainerCamera, ButtonPhoto } from './styles';
import {Camera} from 'expo-camera';

const Home = ({}) =>{
 const [type, setType] = useState(Camera.Constants.Type.back);
 const [hasPermission,setHasPermission] = useState(null);
 const camRef= useRef(null);
 const [capturedPhoto, setcapturedPhoto] = useState(null);

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
          setcapturedPhoto(data.uri);
          setModalOpen(true);
          console.log(data);
      }
 }
    return(
        <Container >
            <ContainerCamera>
                <Camera
                    style={{flex:1, borderRadius: 4}}
                    type={type}
                    ref={camRef}
                />
            </ContainerCamera>
            <ButtonPhoto onPress={takePhoto}>
                <Text style={{color:'white',fontSize: 20, textAlign:'center'}}>
                    TIRAR FOTO DA REFEIÇÃO
                </Text>
            </ButtonPhoto>
            {capturedPhoto&&
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalOpen}
            >
                <View style={{flex: 1, justifyContent:'center', alignItems:'center', margin: 20}}>
                    <TouchableOpacity style={{margin: 10}} onPress={()=>setModalOpen(false)} >
                        <Text style={{color:'red', fontSize:20}}>
                            Fechar
                        </Text>
                    </TouchableOpacity>
                    <Image 
                        style={{width:'100%',height:300, borderRadius: 20}}
                        source={{uri: capturedPhoto }}
                    />
                </View>
            </Modal>
            }

        </Container>
 )
}

export default Home;
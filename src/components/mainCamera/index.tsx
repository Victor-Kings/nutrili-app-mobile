import React,{useState} from "react";
import {ContainerCamera } from './styles';
import {Camera} from 'expo-camera';


const MainCamera = ({camRef}:any) =>{
    const [hasPermission,setHasPermission] = useState(null);
    const [capturedPhoto, setcapturedPhoto] = useState(null);
    return(
    <ContainerCamera>
        <Camera
            style={{flex:1, borderRadius: 4}}
            type={Camera.Constants.Type.back}
            ref={camRef}
        />
    </ContainerCamera>
    )
}

export default MainCamera;
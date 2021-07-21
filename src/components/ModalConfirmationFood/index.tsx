import React,{useState} from "react";
import { View, Text,TouchableOpacity, Modal, Image } from "react-native";
import { ContainerModal } from './styles';


const ModalConfirmationFood = ({modalOpen, handleModal, capturedPhoto, resonseFood}:any) =>{
    console.log(resonseFood);
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalOpen}
            >
            <ContainerModal>
                <TouchableOpacity style={{margin: 10}} onPress={()=>handleModal()} >
                    <Text style={{color:'red', fontSize:20}}>
                        Fechar
                    </Text>
                </TouchableOpacity>
                {
                    resonseFood.map((value:any)=>{
                        console.log(value);
                        return (
                            <View key={value}>
                                <Text style={{color:'#E66767'}}>
                                    {value}
                                </Text>
                            </View>
                        );
                    })
                }
                <Image 
                    style={{width:'100%',height:300, borderRadius: 20}}
                    source={{uri: capturedPhoto }}
                    />
            </ContainerModal>
        </Modal>
    );
}

export default ModalConfirmationFood;
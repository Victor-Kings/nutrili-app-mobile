import React,{useState, useEffect} from "react";
import { View, Text,TouchableOpacity, Modal, Image } from "react-native";
import { ContainerModal, CardFood, TextCardFood, ButtonTouch, TextButton, ContainerViews, ContainerButtons,CardAddFood } from './styles';


const ModalConfirmationFood = ({modalOpen, handleModal, capturedPhoto, responseFood}:any) =>{
    
    const[edit, setEdit] = useState(false);
    const[listFood, setListFood] = useState([]);
    const a = listFood;

    useEffect(() => {
        setListFood(responseFood);
    },[]);

    console.log('opaaa'+listFood);

    const removeItem = ({index}:any) =>{
        const list = listFood;
        list.splice(index, 1);
        setListFood(()=>list);
        console.log("LISTA AKI \n"+listFood);
    }

    const buttonText = !edit?<TextButton size={24}>
                                CONFIRMAR
                            </TextButton>:
                            <TextButton size={20}>
                                SALVAR ALTERAÇÕES
                            </TextButton>;
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalOpen}
            >
            <ContainerModal>
                <ContainerViews>
                    <Text style={{color:'#757575', fontWeight: '600', fontSize: 26, lineHeight: 35 }}>Alimentos Encontrados:</Text>
                    {
                        listFood.map((value,i:any)=>{
                            console.log(value);
                            return (
                                <CardFood key={value} color = '#fff'>
                                    <TextCardFood>
                                        {`\u2022 ${value}`}
                                    </TextCardFood>
                                    {edit &&
                                     <TouchableOpacity style={{backgroundColor: 'black'}} onPress={()=>{removeItem(i); console.log("AATOUCH  "+ i)}}>
                                        <Text style={{color:'red'}}>Remove</Text>
                                     </TouchableOpacity>
                                     }
                                </CardFood>
                            );
                        })
                    }
                    <CardAddFood color='#DAEBFB' onPress={()=>{console.log("OEAEEAIIII")}}>
                        <TextCardFood style={{color: '#4197E5'}}>
                            Adicionar Alimento
                        </TextCardFood>
                    </CardAddFood>
                </ContainerViews>
                <ContainerButtons>
                    <ButtonTouch color = "#4197E5" onPress={()=>handleModal()}>
                        <TextButton>
                            {buttonText}
                        </TextButton>
                    </ButtonTouch>
                    
                    <ButtonTouch color = "#D93F3F" onPress={()=>setEdit(true)} style={{marginVertical: '2%'}}>
                        <TextButton >
                            EDITAR
                        </TextButton>
                    </ButtonTouch>
                </ContainerButtons>
                
                {/* <Image 
                    style={{width:'100%',height:300, borderRadius: 20}}
                    source={{uri: capturedPhoto }}
                    /> */}
            </ContainerModal>
        </Modal>
    );
}

export default ModalConfirmationFood;
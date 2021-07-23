import React,{useState, useEffect} from "react";
import { View, Text,TouchableOpacity, Modal } from "react-native";
import { ContainerModal, CardFood, TextCardFood, ButtonTouch, TextButton, ContainerViews, ContainerButtons,CardAddFood } from './styles';

interface IMap{
    value: string;
    i: number;
}
const ModalConfirmationFood = ({modalOpen, handleModal, capturedPhoto, responseFood}:any) =>{
    
    const[edit, setEdit] = useState<any>(false);
    const[listFood, setListFood] = useState<any>([]);
    const a = listFood;

    useEffect(() => {
        setListFood(responseFood);
    },[]);

    console.log('opaaa'+listFood);

    const removeItem = (value:string) =>{
        const list = listFood.filter((item:string) => item !== value);
        setListFood(list);
        console.log("LISTA AKI \n"+listFood+"|||"+value+"|||");
    }

    const buttonText = !edit?<TextButton /*size={24}*/>
                                CONFIRMAR
                            </TextButton>:
                            <TextButton /*size={20}*/>
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
                        listFood.map((value:string,i:number)=>{
                            console.log(value);
                            return (
                                <CardFood key={value} color = '#fff'>
                                    <TextCardFood>
                                        {`\u2022 ${value}`}
                                    </TextCardFood>
                                    {edit &&
                                     <TouchableOpacity style={{backgroundColor: 'black'}} onPress={()=>{removeItem(value); console.log("AATOUCH  "+ i)}}>
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
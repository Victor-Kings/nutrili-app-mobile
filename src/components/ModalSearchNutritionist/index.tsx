import React, {useState} from "react";
import { Modal, View } from "react-native";
import { IModalProps } from './ModalSearchNutritionist.interface'
import { ContainerModal,ContainerCards  } from "./styles"
import { SearchBar } from "./components/SearchBar";
import { CardNutritionist } from "./components/CardNutritionist";
import {IResponseService} from './ModalSearchNutritionist.interface'


const cardsNutritionist: IResponseService[] = [
    {
        id: 1,
        score: 8,
        name: "Orlando Brakus",
        city: "Campinas",
        state: "SP",
        profilePicture: "https://t.ctcdn.com.br/qm2BM7n0HifXNF4aKxmcTt3nuv8=/512x288/smart/i400479.jpeg",
        phone: "(19) 99999-9999",
    },
    {
        id: 2,
        score: 3,
        name: "Linda Murphy",
        city: "Monte Azul",
        state: "FM",
        profilePicture: "https://t.ctcdn.com.br/qm2BM7n0HifXNF4aKxmcTt3nuv8=/512x288/smart/i400479.jpeg",
        phone: "(19) 99999-9999",
    },
    {
        id: 3,
        score: 6,
        name: "Elton Milles",
        city: "End World",
        state: "Acre",
        profilePicture: "https://t.ctcdn.com.br/qm2BM7n0HifXNF4aKxmcTt3nuv8=/512x288/smart/i400479.jpeg",
        phone: "(19) 99999-9999",
    }
]
export const ModalSearchNutritionist = ({closeModal,  modalOpen, requisitionType}: IModalProps) =>{
   // const [list,setList] = useState<IResponseService>()
   const renderCards = ({item}:any)=>{
       console.log(item)
    return (
        <CardNutritionist 
            city={item.city}
            name={item.name}
            phone={item.phone}
            score={item.score}
            state={item.state}
            profilePicture={item.profilePicture}
        />
   )}
 return(
    <Modal animationType="slide" transparent={true} visible={modalOpen} statusBarTranslucent={true}>
        <View style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <ContainerModal>
                <SearchBar/>
                <ContainerCards data={cardsNutritionist} renderItem={renderCards} keyExtractor={(item:any)=>`${item.id}`}/>
            </ContainerModal>
        </View>
    </Modal>
 )
}
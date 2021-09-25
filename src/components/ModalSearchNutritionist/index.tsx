import React, {useState} from "react";
import { Modal, Text, View } from "react-native";
import { IModalProps } from './ModalSearchNutritionist.interface'
import { ContainerModal  } from "./styles"
import IconSearch from "../../assets/img/iconSearch.svg"
import { SearchBar } from "./components/SearchBar";

export const ModalSearchNutritionist = ({closeModal,  modalOpen, requisitionType}: IModalProps) =>{
   // const [list,setList] = useState<IResponseService>()

 return(
    <Modal animationType="slide" transparent={true} visible={modalOpen} statusBarTranslucent={true}>
        <View style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <ContainerModal>
                <SearchBar/>
                <Text>AAAAAAAAAAAAAAAAAAAAAA</Text>
            </ContainerModal>
        </View>
    </Modal>
 )
}
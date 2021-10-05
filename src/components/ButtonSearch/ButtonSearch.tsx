import React from "react";
import {Button,ContainerIcon, TextCustom} from './styles'
import {IButtonSearch} from './ButtonSearch.interface'
import { View } from "react-native";

export function ButtonSearch({
    buttonLabel, 
    IconButton,
    handlerClick
}:IButtonSearch) {

    const handleClickButton=()=>{
        handlerClick();
    }
    return(
        <Button onPress={handleClickButton}>
            <View style={{display:"flex", flexDirection:"row", maxWidth:"100%"}}>
            <ContainerIcon>
                {IconButton}
            </ContainerIcon>
            <TextCustom>{buttonLabel}</TextCustom>
            </View>
        </Button>
    )
}
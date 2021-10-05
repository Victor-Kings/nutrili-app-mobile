import React from "react";
import {Button, TextCustom} from './styles'
import {IButtonSmall} from './ButtonSmall.interface'
import { View } from "react-native";

export function ButtonSmall({
    buttonLabel, 
    handlerClick
}:IButtonSmall) {

    const handleClickButton=()=>{
        handlerClick();
    }
    
    return(
        <Button onPress={handleClickButton}>
            <View style={{display:"flex", flexDirection:"row", maxWidth:"100%"}}>
            <TextCustom>{buttonLabel}</TextCustom>
            </View>
        </Button>
    )
}
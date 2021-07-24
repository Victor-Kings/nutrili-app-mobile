import React, { useState } from "react";
import {CardAddFood, InputText} from './styles'
import { Text, TouchableOpacity } from "react-native";

const Input = ({handlerAddFood}:any) => {
    const placeHolder = "Nome do Alimento"
    const [text, onChangeText] = React.useState("");
    const sendNewFood = () =>{
        if(text!= placeHolder) handlerAddFood(text);
    }
    return(
       <CardAddFood>
            <InputText  
                placeholder="Nome do Alimento"
                onChangeText={onChangeText}
                value={text}/>
            <TouchableOpacity
                style={{ backgroundColor: "black" }}
                onPress={() => sendNewFood()}
            >
                <Text style={{ color: "green" }}>Adicionar</Text>
            </TouchableOpacity>
       </CardAddFood>
    )
}

export default Input;
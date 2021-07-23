import React, { useState } from "react";
import {CardAddFood, InputText} from './styles'

const Input = () => {
    return(
       <CardAddFood>
        <InputText  placeholder="Nome do Alimento"/>
       </CardAddFood>
    )
}

export default Input;
import { XmlProps } from "react-native-svg";
import {ReactElement} from 'react'

export interface IButtonSearch {
    buttonLabel:String, 
    IconButton: ReactElement | ReactElement[]
    handlerClick: ()=>void
}
import { AxiosResponse } from "axios";

export interface ResponseData{
    Food: string
    Category: string
    Color:string
}

export interface ISendFoodService{
    execute:(responseFood:any) => Promise<ResponseData[]>
    sendFoodDataToBack:(responseData: any)=> Promise<AxiosResponse>
}
import { AxiosResponse } from "axios";
import { ISearchNutritionist } from "../../model/ModelSearchNutritionist.interface";

export interface ISearchNutritionistService{
    execute:(value: string, type: string) => Promise<ISearchNutritionist[] | []>
    acceptNutritionist:(id:string)=>Promise<AxiosResponse>
}
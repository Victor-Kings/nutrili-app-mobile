import { ISearchNutritionist } from "../../model/ModelSearchNutritionist.interface";

export interface ISearchNutritionistService{
    execute:(value: string, type: string) => Promise<ISearchNutritionist[] | []>
}
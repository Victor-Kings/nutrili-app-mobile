export interface ICardNutritionistProps{
    score: number;
    name: string;
    city: string;
    state: string;
    profilePicture: string;
    phone: string;
    id: string
    handlerSelectPatient:(id:string)=>void
    closeModal?:()=>void
}
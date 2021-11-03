export interface ResponseData{
    Food: string
    Category: string
    Color:string
}

export interface ISendFoodService{
    execute:(responseFood:any) => Promise<ResponseData[]>
}
import { AxiosResponse } from "axios";
export interface IpayloadResponses{
    idQuestion?: number,
    answer?: string,
}
export interface IPayloadUser{
    name?: string,
    phone?: string,
    gender?: string,
    birth?: string,
    isNutricionist: boolean,
}
export interface IRegisterDataUserServiceProps {
    sendResponseQuestions:(responses: IpayloadResponses[]|null,token:string) => Promise<AxiosResponse>
    sendRegisterData:(data:IPayloadUser,token: string) => Promise<AxiosResponse>
}
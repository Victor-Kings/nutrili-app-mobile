import { AxiosResponse } from "axios";

export interface IpayloadResponses{
    idQuestion?: number,
    answer?: string,
}
export interface IRegisterDataUserServiceProps {
    sendResponseQuestions:(responses: IpayloadResponses[]|null,token:string) => Promise<AxiosResponse>
}
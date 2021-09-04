import { AxiosResponse } from "axios";

export interface IAuthenticationToken{
    access_token: string,
    refresh_token: string,
    isRegister: boolean
}

export interface IResponseAuthToken{
    access_token: string,
    refresh_token: string,
}

export interface IAuthServiceProps {
    authenticate:(phoneNumber: string, smsToken: string)=>Promise<IResponseAuthToken>
    sendNumberToReceiverSMSToken: (phoneNumber: string)=>Promise<AxiosResponse>
}

export interface IIsRegister{
    isRegister:boolean
}
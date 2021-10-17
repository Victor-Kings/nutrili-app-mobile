import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosResponse } from "axios";
import { apiBackend, apiBackendAuthenticated } from "../../configs/api";
import { LOCAL_STORAGE_AUTH_TOKEN } from "../../configs/const";
import { IAuthenticationToken, IAuthServiceProps,IIsRegister, IResponseAuthToken } from "./AuthService.interface";

export class AuthService implements IAuthServiceProps {

    sendNumberToReceiverSMSToken = async (phoneNumber: string): Promise<AxiosResponse> =>{
        console.log("BBBBBBBBBBBB", phoneNumber)
        return apiBackend.post("/user/smsToken", null, { params: { phone: phoneNumber }, headers: { "AOBARIZATION": "Aoba dGVzdGU6MTIzNDU=" } })
    }
    authenticate = async (phoneNumber: string, smsToken: string): Promise<IResponseAuthToken> => {
        const formData = this.mapToFormData(phoneNumber, smsToken);

        const { data } = await apiBackend.post<IResponseAuthToken>("/oauth/token", formData, {
            headers: {
                "Authorization": "Basic dGVzdGU6MTIzNDU=",
            }
        })
       

        // const response = this.mapToAuthenticationToken(data, userIsResgister.newUser);

        // if (response.access_token) {
        //     await AsyncStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, JSON.stringify(response))
        // }

        return data;
    }

    verifyIsUser = async (token: string): Promise<IIsRegister> =>{
        const {data} = await apiBackendAuthenticated.get<IIsRegister>("/user/isNewUser",
       { headers: { "Authorization": `Bearer ${token}`} } 
        )
        return data;
    }

    async logout(): Promise<void> {
        
    }

    getCurrentToken = async ():Promise<IAuthenticationToken | null> => {
       const auth_token = await AsyncStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)
       
       if(auth_token){
           return JSON.parse(auth_token)
       }

       return null;            
    }

    // private mapToAuthenticationToken(data: IResponseAuthToken, isValid: boolean): IAuthenticationToken{
    //     data.refresh_token
    //     const response = {
    //         access_token: data.access_token, 
    //         refresh_token: data.refresh_token,
    //         isRegister: isValid
    //     }
    //     return response;
    // }
    private mapToFormData(phoneNumber: string, sms: string) {
        var bodyFormData = new FormData();
        bodyFormData.append('grant_type', 'password')
        bodyFormData.append('username', `${phoneNumber}:2:${sms}`)
        bodyFormData.append('password', 'vintao20')
        return bodyFormData;
    }

}
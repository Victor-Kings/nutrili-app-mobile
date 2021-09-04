import { AxiosResponse } from "axios";
import { IRegisterDataUserServiceProps, IpayloadResponses,IPayloadUser } from './RegisterDataUserService.interface';
import { apiBackend } from "../../configs/api";

export class RegisterDataUserService implements IRegisterDataUserServiceProps {

    sendResponseQuestions = async (response: IpayloadResponses[]|null, token: string): Promise<AxiosResponse> =>
    await apiBackend.post("/answer/insertAnswer", response, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    sendRegisterData = async (response: IPayloadUser,token: string): Promise<AxiosResponse> =>
    await apiBackend.post("/user/updateUser", response, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

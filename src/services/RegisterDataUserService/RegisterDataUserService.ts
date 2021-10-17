import { AxiosResponse } from "axios";
import {
  IRegisterDataUserServiceProps,
  IpayloadResponses,
  IPayloadUser,
} from "./RegisterDataUserService.interface";
import { apiBackendAuthenticated, getAccessToken } from "../../configs/api";

export class RegisterDataUserService implements IRegisterDataUserServiceProps {
  sendResponseQuestions = async (
    response: IpayloadResponses[] | null
  ): Promise<AxiosResponse> =>{
    const token = await getAccessToken()
    return await apiBackendAuthenticated.post("/answer/insertAnswer", response, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  sendRegisterData = async (
    response: IPayloadUser,
  ): Promise<AxiosResponse> => {
    const token = await getAccessToken()
    const data = await apiBackendAuthenticated.put("/user/updateUser", response, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data
  };
}

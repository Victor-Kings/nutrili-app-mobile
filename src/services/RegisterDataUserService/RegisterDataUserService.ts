import { AxiosResponse } from "axios";
import {
  IRegisterDataUserServiceProps,
  IpayloadResponses,
  IPayloadUser,
} from "./RegisterDataUserService.interface";
import { apiBackendAuthenticated } from "../../configs/api";

export class RegisterDataUserService implements IRegisterDataUserServiceProps {
  sendResponseQuestions = async (
    response: IpayloadResponses[] | null,
    token: string
  ): Promise<AxiosResponse> =>{
      console.log("SEND RESPONSE: " , response)
    return await apiBackendAuthenticated.post("/answer/insertAnswer", response, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  sendRegisterData = async (
    response: IPayloadUser,
    token: string
  ): Promise<AxiosResponse> => {
      console.log("SEND REGISTER: " , response)
    return await apiBackendAuthenticated.put("/user/updateUser", response, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
}

import { apiBackendAuthenticated, getAccessToken } from "../../configs/api";
import { IGetDataProfileApi, IGetDataProfileProps } from "./GetDataProfile.interface";

export class GetDataProfile implements IGetDataProfileProps {
  execute = async (): Promise<IGetDataProfileApi> => {
    const token = await getAccessToken();
    const { data } = await apiBackendAuthenticated.get("patient/getPatient", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  };
}

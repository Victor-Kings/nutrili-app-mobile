import { apiBackendAuthenticated, getAccessToken } from "../../configs/api";
import {
  IGetData,
  IGetDataAPI,
  IGetDietServiceProps,
} from "./GetDietService.interface";

export class GetDietService implements IGetDietServiceProps {
  execute = async (): Promise<IGetData[]> => {
    const token = await getAccessToken();
    const { data } = await apiBackendAuthenticated.get("diet/getDiet", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    var response: IGetData[] = [];
    data.map((value: IGetDataAPI) => {
      response.push({ data: value.food, title: value.name });
    });

    return response;
  };
}

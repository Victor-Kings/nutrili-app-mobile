import { AxiosResponse } from "axios";
import {apiBackendAuthenticated, getAccessToken} from "../../configs/api";
import { ISendFoodService } from "./SendFoodsArrayService.interface";

export class SendFoodsArrayService implements ISendFoodService {
  async execute(responseFood: any): Promise<AxiosResponse> {
    const token = await getAccessToken();
    return await apiBackendAuthenticated.post("/meal/mealTime", responseFood,{
      headers: {
        "Authorization": `Bearer ${token}`,
      },
  });
  }
}

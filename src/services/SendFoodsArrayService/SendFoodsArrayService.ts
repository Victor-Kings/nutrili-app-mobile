import { AxiosResponse } from "axios";
import {apiBackendAuthenticated, apiRecognize, getAccessToken} from "../../configs/api";
import { ISendFoodService,ResponseData } from "./SendFoodsArrayService.interface";


export class SendFoodsArrayService implements ISendFoodService {
  async execute(responseFood: any): Promise<ResponseData[]> {
    console.log(responseFood);
    const { data } = await apiRecognize.post("/post_recognized_foods", {
      Recognized_Foods: responseFood,
    });
    return data;
  }

  sendFoodDataToBack = async (
    responseData: ResponseData[]
  ): Promise<AxiosResponse> =>{
    const token = await getAccessToken()
    return await apiBackendAuthenticated.post("/meal/mealTime",mapResponse(responseData), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

const mapResponse= ( responseData: ResponseData[])=>{
  let newResponseData;
  
  responseData.forEach((element)=>{
    newResponseData.push({
      name:element.Food,
      color:element.Color,
      category:element.Category
    })
  })

  return newResponseData
}

import {apiRecognize} from "../../configs/api";
import { ISendFoodService,ResponseData } from "./SendFoodsArrayService.interface";


export class SendFoodsArrayService implements ISendFoodService {
  async execute(responseFood: any): Promise<ResponseData[]> {
    console.log(responseFood);
    const { data } = await apiRecognize.post("/post_recognized_foods", {
      Recognized_Foods: responseFood,
    });
    return data;
  }
}

import {apiRecognize} from "../../configs/api";
import { ISendFoodService } from "./SendFoodsArrayService.interface";

export class SendFoodsArrayService implements ISendFoodService {
  async execute(responseFood: any): Promise<any> {
    const { data } = await apiRecognize.post("/post_recognized_foods", {
      Recognized_Foods: responseFood,
    });
    return data;
  }
}

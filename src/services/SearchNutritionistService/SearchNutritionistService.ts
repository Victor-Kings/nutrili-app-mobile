import { apiBackendAuthenticated } from "../../configs/api";
import { ISearchNutritionist } from "../../model/ModelSearchNutritionist.interface";
import { ISearchNutritionistService } from "./SearchNutritionistService.interface";

export class SearchNutritionistService implements ISearchNutritionistService {
  async execute(value: string, type: string): Promise<ISearchNutritionist[]|[]> {
    const {data} = await apiBackendAuthenticated.get(
      "/nutritionist/getNutritionist",
      {
        params: {
          searchParameter: value,
          searchMethod: type === "city" ? 1 : 1,
        },
      }
    );
    return data;
  }
}

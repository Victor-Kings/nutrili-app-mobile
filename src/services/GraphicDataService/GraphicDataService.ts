import { apiBackendAuthenticated, getAccessToken } from "../../configs/api";
import { IGraphData, IGraphDataProps } from "./GraphicDataService.interface";

export class GraphicDataService implements IGraphDataProps {
    execute = async (): Promise<IGraphData[]> => {
    const token = await getAccessToken()
      const {data} = await apiBackendAuthenticated.get('/meal/mealChart', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      
      return data
    }
}  
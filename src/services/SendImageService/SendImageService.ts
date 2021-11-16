import { apiBackendAuthenticated, getAccessToken} from "../../configs/api";
import { ISendImageService } from "./SendImageService.interface";
import FormData from "form-data";
export class SendImageService implements ISendImageService {
  async execute(ImageData: any): Promise<any> {
    const token = await getAccessToken();
    var form = new FormData();

    form.append("pic", {
      type: "image/jpeg",
      name: `alimento.jpg`,
      uri: ImageData.uri,
    });

    const Recognized_Foods = await apiBackendAuthenticated.post("/api/getLabelDetection", form, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        },
    })
    
    return Recognized_Foods.data;
  }
}

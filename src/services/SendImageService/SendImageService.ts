import api from "../../configs/api";
import { ISendImageService } from "./SendImageService.interface";
import FormData from "form-data";


export class SendImageService implements ISendImageService {
  async execute(ImageData: any): Promise<any> {
      
    var form = new FormData();

    form.append("file1", {
      type: "image/jpeg",
      name: `alimento.jpg`,
      uri: ImageData.uri,
    });

    const {data:{Recognized_Foods}} = await api.post("/post_image", form, {
        headers: {
        "Content-Type": "multipart/form-data",
        },
    })

    return Recognized_Foods;
  }
}

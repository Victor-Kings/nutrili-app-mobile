import {apiRecognize} from "../../configs/api";
import { Image } from 'react-native';
import { ISendImageService } from "./SendImageService.interface";
import FormData from "form-data";
import img from "../../assets/img/maca.jpg";
export class SendImageService implements ISendImageService {
  async execute(ImageData: any): Promise<any> {
      
    var form = new FormData();

    form.append("image", {
      type: "image/jpeg",
      name: `alimento.jpg`,
      uri: Image.resolveAssetSource(img).uri //ImageData.uri,
    });

    const {data:{Recognized_Foods}} = await apiRecognize.post("/post_image", form, {
        headers: {
        "Content-Type": "multipart/form-data",
        },
    })
    return Recognized_Foods;
  }
}

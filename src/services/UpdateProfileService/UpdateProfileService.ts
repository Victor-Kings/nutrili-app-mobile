import { apiBackendAuthenticated } from "../../configs/api";
import {
  IUpdateProfileServiceProps,
  IPayloadUpdate,
} from "./UpdateProfileService.interface";
import FormData from "form-data";

export class UpdateProfileService implements IUpdateProfileServiceProps {
  async updateProfilePick(ImageData: any): Promise<void> {
    var form = new FormData();
    form.append("profilePic", {
      type: "image/jpeg",
      name: `${this.makeid()}.jpg`,
      uri: ImageData,
    });
    await apiBackendAuthenticated.put("user/updateUserProfilePic", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async updateProfile(response: IPayloadUpdate): Promise<void> {
    await apiBackendAuthenticated.put("user/updateUser", response);
  }

  private makeid(): string {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 50; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}

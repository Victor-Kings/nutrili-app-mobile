import axios, { AxiosError } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_STORAGE_AUTH_TOKEN} from "./const";
import { IAuthProps } from "../context/authContext.interface";

let isRefreshing = false;

interface IFailed {
  onSuccess: (token: string) => void;
  onFailed: (err: AxiosError) => void;
}
let failedRequestsQueue: IFailed[] = [];

export const apiRecognize = axios.create({
  baseURL: "http://192.168.0.104:8090",
});

const getLocalToken = async() => {
  const authTokenStr = await AsyncStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)
  if(authTokenStr){
    const authToken:IAuthProps = JSON.parse(authTokenStr);
    return authToken.access_token
  }
}

export const apiBackend = axios.create({
  baseURL: "http://192.168.0.176:5000",
  headers:{
    Authorization: `Bearer ${getLocalToken}`
  }
});

apiBackend.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (error.response.data.code === "token.expired") {
        const auth_token = await AsyncStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);
        const originalConfig = error.config;

        if (auth_token) {
          const auth: IAuthProps = JSON.parse(auth_token);

          const formData = mapToFormData(auth.refresh_token);

          if (!isRefreshing) {
            isRefreshing = true;

            apiBackend
              .post("/oauth/token", formData, {
                headers: {
                  Authorization: "Basic dGVzdGU6MTIzNDU=",
                },
              })
              .then(async (response) => {
                const { token } = response.data;
                await AsyncStorage.setItem(
                  LOCAL_STORAGE_AUTH_TOKEN,
                  JSON.stringify({
                    ...auth,
                    auth_token: response.data.auth_token,
                    refresh_token: response.data.refresh_token,
                  })
                );

                apiBackend.defaults.headers['Authorization'] = `Bearer ${token}`
                failedRequestsQueue.forEach((request) =>
                  request.onSuccess(token)
                );
                failedRequestsQueue = [];
              })
              .catch((err) => {
                failedRequestsQueue.forEach((request) => request.onFailed(err));
                failedRequestsQueue = [];
              })
              .finally(() => {
                isRefreshing = false;
              });
          }

          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              onSuccess: (token: string) => {
                originalConfig.headers["Authorization"] = `Bearer ${token}`;

                resolve(apiBackend(originalConfig));
              },
              onFailed: (err: AxiosError) => {
                reject(err);
              },
            });
          });
        } else {
          // deslogar usuário
        }
      }
    }
  }
);

const mapToFormData = (refresh_token: string) => {
  var bodyFormData = new FormData();
  bodyFormData.append("grant_type", "refresh_token");
  //bodyFormData.append('username', `${phoneNumber}:2:${sms}`)
  bodyFormData.append("refresh_token", `${refresh_token}`);
  return bodyFormData;
};

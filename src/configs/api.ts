import axios, { AxiosError } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_STORAGE_AUTH_TOKEN } from "./const";
import { IAuthProps } from "../context/authContext.interface";
import { IAuthenticationToken } from "../services/AutheService/AuthService.interface";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { navigate } from "../routes/rootNavigator";

let isRefreshing = false;

interface IFailed {
  onSuccess: (token: string) => void;
  onFailed: (err: AxiosError) => void;
}
let failedRequestsQueue: IFailed[] = [];

export const apiRecognize = axios.create({
  baseURL: "http://192.168.0.176:8090",
});

const getLocalToken = async () => {
  const authTokenStr = await AsyncStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);
  if (authTokenStr) {
    const authToken: IAuthProps = JSON.parse(authTokenStr);
    return authToken.access_token;
  }
};

export const apiBackend = axios.create({
  baseURL: "http://192.168.0.176:5000",
});

export const apiBackendAuthenticated = axios.create({
  baseURL: "http://192.168.0.176:5000",
  headers: {
    Authorization: `Bearer ${getLocalToken}`,
  },
});

apiBackendAuthenticated.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (error.response?.data.error === "invalid_token") {
        const auth_token = await AsyncStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);
        const originalConfig = error.config;

        if (auth_token) {
          const auth: IAuthProps = JSON.parse(auth_token);

          const formData = mapToFormData(auth.refresh_token);

          if (!isRefreshing) {
            isRefreshing = true;
            apiBackendAuthenticated
              .post("/oauth/token", formData, {
                headers: {
                  Authorization: "Basic dGVzdGU6MTIzNDU=",
                },
              })
              .then(async (response) => {
                const { access_token } = response.data;

                await AsyncStorage.setItem(
                  LOCAL_STORAGE_AUTH_TOKEN,
                  JSON.stringify({
                    ...auth,
                    access_token: response.data.access_token,
                    refresh_token: response.data.refresh_token,
                  })
                );

                apiBackendAuthenticated.defaults.headers[
                  "Authorization"
                ] = `Bearer ${access_token}`;
                failedRequestsQueue.forEach((request) =>
                  request.onSuccess(access_token)
                );
                failedRequestsQueue = [];
              })
              .catch(async (err) => {
                console.error("falhou a reautenticação");
                failedRequestsQueue.forEach((request) => request.onFailed(err));
                failedRequestsQueue = [];
                try {
                  await AsyncStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN);
                } catch (e) {
                  console.log("E A VIATURA DA PAIXAO", e);
                }
                navigate('Login','Auth');
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
        }
      } else {
        try {
          await AsyncStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN);
        } catch (e) {
          console.log("E A VIATURA DA PAIXAO", e);
        }
        navigate('Login','Auth');
      }
    }
  }
);

const mapToFormData = (refresh_token: string) => {
  var bodyFormData = new FormData();
  bodyFormData.append("grant_type", "refresh_token");
  bodyFormData.append("refresh_token", `${refresh_token}`);
  return bodyFormData;
};

export const getAccessToken = async (): Promise<string | null> => {
  const auth_token = await AsyncStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

  if (auth_token) {
    const auth: IAuthenticationToken = JSON.parse(auth_token);
    return auth.access_token;
  }

  return null;
};

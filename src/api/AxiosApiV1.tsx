import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { readFromLocalStorage } from "../LocalStorageService";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";
import { logoutUser } from "./AuthService";
import { JwtToken } from "../models/JwtToken";

export const getAuthorizationToken = () =>
  readFromLocalStorage("CINEMON-TOKEN");

export const isTokenExpired = (): boolean => {
  const token: string = readFromLocalStorage("CINEMON-TOKEN");
  if (token) {
    const decodedToken: JwtToken = jwtDecode(token);
    const dateTime = new Date(decodedToken.exp * 1000);
    return dayjs(dateTime).isBefore(dayjs().valueOf());
  }
  return false;
};

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!isTokenExpired() && config.headers) {
      config.headers.Authorization = getAuthorizationToken();
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response): Promise<AxiosResponse> | AxiosResponse => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 403) {
      logoutUser();
    }
    return Promise.reject(error);
  }
);

export { api };

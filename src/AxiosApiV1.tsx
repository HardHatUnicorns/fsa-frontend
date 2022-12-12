import axios, { AxiosRequestConfig } from "axios";
import { readFromLocalStorage } from "./LocalStorage";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";
import { JwtToken } from "./models/JwtToken";
import { logoutUser } from "./services/AuthenticationService";

export const getAuthorizationToken = () =>
  readFromLocalStorage("CINEMON-TOKEN");

export const isTokenExpired = (): boolean => {
  const token = readFromLocalStorage("CINEMON-TOKEN");
  if (token) {
    const decodedToken: JwtToken = jwtDecode(token);
    const dateTime = new Date(decodedToken.exp * 1000);
    return dayjs(dateTime).isBefore(dayjs().valueOf());
  }
  return false;
};

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!isTokenExpired()) {
      config.headers.Authorization = getAuthorizationToken();
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response): any => {
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

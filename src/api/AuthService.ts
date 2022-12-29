import { removeFromLocalStorage } from "~/LocalStorageService";
import axios from "axios";
import { RegisterUserRequest } from "~/models/RegisterUserRequest";
import { LocalStorage } from "~/models/enums/LocalStorage";

export const login = async (
  username: string,
  password: string
): Promise<void> => {
  return await axios.post(`${process.env.REACT_APP_API}auth/token`, {
    username,
    password,
  });
};

export const register = async (payload: RegisterUserRequest): Promise<void> => {
  await axios.post(`${process.env.REACT_APP_API}auth/token`, payload);
};

export const logoutUser = (): void => {
  clearUserData();
  setTimeout(() => {
    window.location.replace(
      `${window.location.protocol}//${process.env.REACT_APP_DOMAIN_ROOT}/`
    );
  }, 500);
};

export const clearUserData = (): void => {
  removeFromLocalStorage(LocalStorage.TOKEN);
};

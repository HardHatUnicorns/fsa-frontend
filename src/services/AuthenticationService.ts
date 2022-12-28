import { removeFromLocalStorage } from "../LocalStorage";
import { Token } from "../models/enums/Token";
import axios from "axios";

export const login = async (username: string, password: string) => {
  return await axios.post(`${process.env.REACT_APP_API}login`, {
    username,
    password,
  });
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
  removeFromLocalStorage(Token.TOKEN);
};

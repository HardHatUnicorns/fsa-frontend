import { api } from "../AxiosApiV1";
import { Cinema } from "../models/Cinema";

export const getCinemas = async (): Promise<Cinema[]> => {
  const { data } = await api.get(`cinemas`);
  return data;
};

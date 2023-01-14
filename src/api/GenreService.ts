import { Genre } from "~/models/Genre";
import { api } from "~/api/AxiosApiV1";

export const getGenres = async (): Promise<Genre[]> => {
  const { data } = await api.get(`genres`);
  return data;
};

import { Movie } from "~/models/Movie";
import { api } from "~/api/AxiosApiV1";

export const getTickets = async (): Promise<Movie[]> => {
  const { data } = await api.get(`tickets`, {});
  return data;
};

import { MovieDetails } from "../models/MovieDetails";
import { Movie } from "../models/Movie";
import { api } from "./AxiosApiV1";

export const getMovies = async (): Promise<Movie[]> => {
  const { data } = await api.get(`movies`, {});
  return data;
};

export const getMovieDetails = async (
  movieId: number
): Promise<MovieDetails> => {
  const { data } = await api.get(`movies/${movieId}`);
  return data;
};

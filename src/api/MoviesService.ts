import { MovieDetails } from "../models/MovieDetails";
import { Movie } from "../models/Movie";
import { api } from "./AxiosApiV1";

export const getMovies = async (genres?: string[]): Promise<Movie[]> => {
  const searchParams: URLSearchParams = new URLSearchParams();
  genres?.forEach((it) => {
    searchParams.append("genre", it);
  });
  console.log(genres);
  const { data } = await api.get(`movies?${searchParams}`, {});
  return data;
};

export const getMovieDetails = async (
  movieId: number
): Promise<MovieDetails> => {
  const { data } = await api.get(`movies/${movieId}`);
  return data;
};

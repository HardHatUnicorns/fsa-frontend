import axios from "axios";
import { MovieDetails } from "../models/MovieDetails";
import { Movie } from "../models/Movie";

export const getMovies = async (): Promise<Movie[]> => {
  const { data } = await axios.get(`${process.env.REACT_APP_API}movies`, {});
  return data;
};

export const getMovieDetails = async (
  movieId: number
): Promise<MovieDetails> => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API}movies/${movieId}`,
    {}
  );
  return data;
};

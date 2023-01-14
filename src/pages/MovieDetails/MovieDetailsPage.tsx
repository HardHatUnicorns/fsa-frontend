import { useQuery } from "react-query";
import { Tickets } from "~/views/Tickets";
import { getMovieDetails } from "~/api/MoviesService";
import { MovieDetails as MovieDetailsType } from "~/models/MovieDetails";
import { MovieDetails } from "./MovieDetails";
import { useParams } from "react-router-dom";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, status } = useQuery<MovieDetailsType>(
    ["getMovieDetails", movieId],
    () => getMovieDetails(Number(movieId))
  );

  console.log(data);

  return (
    <div className="bg-company-yellow p-2 lg:flex lg:flex-col lg:items-center lg:pt-16">
      {status === "loading" ? <p>Fetching movie details...</p> : null}
      {status === "success" ? <MovieDetails {...data} /> : null}
      <Tickets />
    </div>
  );
};

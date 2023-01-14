import { useQuery } from "react-query";
import { getMovies } from "~/api/MoviesService";
import { MovieCard } from "~/components/shared/MovieCard/MovieCard";
import { Movie } from "~/models/Movie";

export const HotTitles = () => {
  const { data, status } = useQuery<Movie[]>("moviesNearYou", getMovies);

  return (
    <div className="w-full flex flex-col items-center pt-5">
      <h1 className="text-2xl md:text-5xl lg:text-7xl text-center mb-6 lg:mb-12 font-bold">
        Hot titles right now
      </h1>
      <div className="max-w-7xl w-full flex flex-row flex-wrap gap-x-5 gap-y-5 justify-center align-baseline">
        {status === "loading" ? <p>Fetching movies near you...</p> : null}
        {status === "success"
          ? data.map((movie) => <MovieCard key={movie.id} {...movie} />)
          : null}
        {status === "error" ? <p>Error fetching movies</p> : null}
      </div>
    </div>
  );
};

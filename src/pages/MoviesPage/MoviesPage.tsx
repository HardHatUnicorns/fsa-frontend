import { MovieCard } from "~/components/shared/MovieCard";
import { useQuery } from "react-query";
import { Movie } from "~/models/Movie";
import { getMovies } from "~/api/MoviesService";

export const MoviesPage = () => {
  const { data, status } = useQuery<Movie[]>("moviesNearYou", getMovies);
  return (
    <div className="flex flex-col h-full border-2 pt-10 min-h-full">
      <h1 className="text-4xl font-bold text-center">
        Movies currently in cinemas
      </h1>

      <div className="flex flex-row pl-40 pr-40 pt-10">
        <div className="w-1/4 h-full shadow-lg">
          <h1 className="text-center text-lg font-bold">Filters</h1>
          <h1 className="text-center text-lg font-bold">Movie type</h1>
        </div>

        <div className="flex flex-row flex-wrap gap-y-5 gap-x-5 w-full pl-10">
          {status === "loading" ? <p>Fetching movies near you...</p> : null}
          {status === "success"
            ? data.map((it) => <MovieCard key={it.id} />)
            : null}
          {status === "error" ? <p>Error fetching movies</p> : null}
        </div>
      </div>
    </div>
  );
};

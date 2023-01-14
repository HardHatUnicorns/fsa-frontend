import { MovieCard } from "~/components/shared/MovieCard";
import { useQuery } from "react-query";
import { Movie } from "~/models/Movie";
import { getMovies } from "~/api/MoviesService";
import { useSearchParams } from "react-router-dom";
import { Genre } from "~/models/Genre";
import { getGenres } from "~/api/GenreService";
import { useEffect, useState } from "react";

export const MoviesPage = () => {
  const [searchParams] = useSearchParams();
  const genreQueryParam: string | null = searchParams.get("genre");

  const [activeGenres, setActiveGenres] = useState<string[]>([]);

  const moviesResult = useQuery<Movie[]>(["moviesNearYou", activeGenres], () =>
    getMovies(activeGenres)
  );
  const genresResult = useQuery<Genre[]>("all-genres", getGenres);

  const isGenreActive = (genre: string): boolean => {
    return activeGenres.includes(genre);
  };

  const toggleActiveGenre = (genre: string): void => {
    if (isGenreActive(genre)) {
      setActiveGenres(activeGenres.filter((it) => it !== genre));
    } else {
      setActiveGenres([...activeGenres, genre]);
    }
  };

  useEffect(() => {
    if (genreQueryParam !== null && genreQueryParam !== undefined) {
      toggleActiveGenre(genreQueryParam);
    }
  }, [genreQueryParam]);

  return (
    <div className="flex flex-col h-full border-2 pt-10 min-h-full">
      <h1 className="text-4xl font-bold text-center">
        Movies currently in cinemas
      </h1>

      <div className="flex flex-row pl-40 pr-40 pt-10">
        <div className="w-1/4 h-full shadow-lg p-4">
          <h1 className="text-center text-lg font-bold">Filters</h1>
          <h1 className="text-center text-lg font-bold">Movie type</h1>
          {genresResult.status === "success"
            ? genresResult.data.map((it) => (
                <div key={it.id} className="flex flec-row gap-x-2 items-center">
                  <input
                    type="checkbox"
                    value={it.name}
                    checked={isGenreActive(it.name)}
                    onChange={() => toggleActiveGenre(it.name)}
                  />
                  <span onClick={() => toggleActiveGenre(it.name)}>
                    {it.name}
                  </span>
                </div>
              ))
            : null}
        </div>

        <div className="flex flex-row flex-wrap gap-y-5 gap-x-5 w-full pl-10">
          {moviesResult.status === "loading" ? (
            <p>Fetching movies near you...</p>
          ) : null}
          {moviesResult.status === "success"
            ? moviesResult.data.map((it) => <MovieCard key={it.id} {...it} />)
            : null}
          {moviesResult.status === "error" ? (
            <p>Error fetching movies</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

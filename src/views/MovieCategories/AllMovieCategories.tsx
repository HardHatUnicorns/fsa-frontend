import { FC } from "react";
import { MovieCategoryCard } from "~/views/MovieCategories/MovieCategoryCard";
import { useQuery } from "react-query";
import { Genre } from "~/models/Genre";
import { getGenres } from "~/api/GenreService";

export const AllMovieCategories: FC = () => {
  const { data, isLoading, isFetched, isError } = useQuery<Genre[]>(
    "all-genres",
    getGenres
  );

  return (
    <div className="w-full flex flex-col items-center pt-5">
      <h1 className="text-2xl md:text-5xl lg:text-7xl text-center mb-6 lg:mb-12 font-bold">
        Explore movie categories
      </h1>
      <div className="max-w-7xl flex flex-row flex-wrap w-full gap-x-5 gap-y-5 justify-center align-baseline">
        {isLoading ? <p>Loading..</p> : null}
        {isFetched ? (
          <>
            {data?.map((it) => (
              <MovieCategoryCard key={it.id} name={it.name} />
            ))}
          </>
        ) : null}
        {isError ? <p>Could not fetch genres</p> : null}
      </div>
    </div>
  );
};

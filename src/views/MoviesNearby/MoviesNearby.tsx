import { FC } from "react";
import { MovieCard } from "~/components/shared/MovieCard/MovieCard";

export const MoviesNearby: FC = () => {
  const data = [
    { name: "Harry Potter and the Philosopher's Stone ", id: 1 },
    { name: "Harry Potter and the Chamber of Secrets ", id: 2 },
    { name: "Harry Potter and the Prisoner of Azkaban", id: 3 },
    { name: "Harry Potter and the Goblet of Fire", id: 4 },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl md:text-5xl lg:text-7xl text-center mb-6 lg:mb-12 font-bold">
        Today near your location
      </h1>
      <div className="max-w-7xl flex flex-row flex-wrap w-full gap-x-5 gap-y-5 justify-center align-baseline">
        {data.map((it) => (
          <MovieCard key={it.id} />
        ))}
      </div>
    </div>
  );
};

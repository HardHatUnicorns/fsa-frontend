import { FC } from "react";
import { MovieCategoryCard } from "~/views/MovieCategories/MovieCategoryCard";

export const AllMovieCategories: FC = () => {
  const categories = [
    { name: "Comedy", id: 1 },
    { name: "Romance", id: 2 },
    { name: "Horror", id: 3 },
    { name: "Hehe", id: 4 },
    { name: "Haha", id: 5 },
    { name: "Thriller", id: 6 },
    { name: "Comedy", id: 7 },
    { name: "BlaBlaFoo extralong", id: 8 },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl md:text-5xl lg:text-7xl text-center mb-6 lg:mb-12 font-bold">
        Explore movie categories
      </h1>
      <div className="max-w-7xl flex flex-row flex-wrap w-full gap-x-5 gap-y-5 justify-center align-baseline">
        {categories.map((it) => (
          <MovieCategoryCard key={it.id} name={it.name} />
        ))}
      </div>
    </div>
  );
};

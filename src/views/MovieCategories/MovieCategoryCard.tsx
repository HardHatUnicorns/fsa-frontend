import { FC } from "react";
import { NavLink } from "react-router-dom";

interface MovieCategoryCardProps {
  name: string;
}

export const MovieCategoryCard: FC<MovieCategoryCardProps> = ({ name }) => {
  return (
    <NavLink
      className="pt-10 pb-10 cursor-pointer pl-3 pr-3 truncate shadow-md bg-white font-bold border-2 w-full max-w-[10rem] text-center"
      to={`/movies?genre=${name}`}
    >
      {name}
    </NavLink>
  );
};

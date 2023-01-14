import { Movie } from "~/models/Movie";
import { NavLink } from "react-router-dom";

import "./MovieCard.css";

type MovieCardProps = Movie;

export const MovieCard = ({ id, title, shortDescription }: MovieCardProps) => {
  return (
    <div className="w-full max-w-[350px] h-[265px] flex flex-row bg-white shadow-xl rounded-lg">
      <img
        className="h-auto rounded-l-lg"
        srcSet="https://via.placeholder.com/150x265.png"
      />
      <div className="flex flex-col">
        <div className="p-3 shrink">
          <h3 className="font-bold text-3xl title mb-1">{title}</h3>
          <p className="text-sm description text-gray-400">
            {shortDescription}
          </p>
        </div>
        <div className="grow flex justify-end align-bottom p-3">
          <NavLink to={`/movies/${id}`}>
            <button className="p-2 bg-company-dark-grey text-white font-bold rounded-md">
              Show more
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

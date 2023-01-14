import { NavLink } from "react-router-dom";

type CinemaCardProps = {
  id: number;
  name: string;
  url: string;
};

export const CinemaCard = ({ name, url, id }: CinemaCardProps) => {
  return (
    <NavLink
      to={`/cinema-facilities/${id}`}
      className="py-6 md:py-0 px-0 md:px-8 lg:px-16"
    >
      <picture>
        <source
          media="(min-width:1024px)"
          srcSet={`https://via.placeholder.com/440x290.png?text=${name.replace(
            " ",
            "+"
          )}`}
        />
        <source
          media="(min-width:768px)"
          srcSet={`https://via.placeholder.com/210x140.png?text=${name.replace(
            " ",
            "+"
          )}`}
        />
        <source
          media="(min-width:640px)"
          srcSet={`https://via.placeholder.com/210x120.png?text=${name.replace(
            " ",
            "+"
          )}`}
        />
        <img
          src={`https://via.placeholder.com/210x120.png?text=${name.replace(
            " ",
            "+"
          )}`}
          alt={name}
        />
      </picture>
    </NavLink>
  );
};

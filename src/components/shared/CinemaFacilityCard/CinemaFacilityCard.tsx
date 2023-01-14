import { NavLink } from "react-router-dom";
import { CinemaFacility } from "~/models/CinemaFacility";

type CinemaFacilityCardProps = CinemaFacility;

export const CinemaFacilityCard = ({
  id,
  name,
  address,
}: CinemaFacilityCardProps) => {
  return (
    <NavLink to={`/cinema-facility/${id}`}>
      <div className="w-full max-w-[350px] min-h-[265px] flex flex-col bg-white shadow-xl rounded-lg cursor-pointer">
        <img
          className="h-auto"
          srcSet="https://via.placeholder.com/350x192.png"
        />
        <div className="flex flex-col">
          <div className="p-3 shrink">
            <h3 className="font-bold text-2xl title mb-1">{name}</h3>
            <p className="text-sm description text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              molestie erat quis turpis cursus hendrerit.
            </p>
          </div>
          <div className="grow flex justify-end align-bottom p-3">
            <button className="p-2 bg-company-dark-grey text-white font-bold rounded-md">
              Show more
            </button>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

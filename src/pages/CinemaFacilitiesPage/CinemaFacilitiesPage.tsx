import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
  getCinemaDetails,
  getCinemaFacilitiesByCinemaId,
} from "~/api/CinemaService";
import { CinemaFacility } from "~/models/CinemaFacility";
import { CinemaFacilityCard } from "~/components/shared/CinemaFacilityCard";
import { CinemaDetails } from "~/models/CinemaDetails";

export const CinemaFacilitiesPage = () => {
  const { cinemaId } = useParams();

  const cinemaDetailsResult = useQuery<CinemaDetails>(
    ["cinema-details", cinemaId],
    () => getCinemaDetails(cinemaId as string)
  );

  const cinemaFacilitiesResult = useQuery<CinemaFacility[]>(
    ["cinema-facilities", cinemaId],
    () => getCinemaFacilitiesByCinemaId(cinemaId as string)
  );

  return (
    <div className="flex flex-col h-full border-2 pt-10 min-h-full">
      <h1 className="text-4xl font-bold text-center">
        {cinemaDetailsResult.status === "success"
          ? cinemaDetailsResult.data.name
          : null}
      </h1>

      <div className="flex flex-row pl-40 pr-40 pt-10">
        <div className="w-1/4 h-full shadow-lg">
          <h1 className="text-center text-lg font-bold">Filters</h1>
          <h1 className="text-center text-lg font-bold">City</h1>
        </div>

        <div className="flex flex-row flex-wrap gap-y-5 gap-x-5 w-full pl-10">
          {cinemaFacilitiesResult.status === "loading" ? (
            <p>Fetching movies near you...</p>
          ) : null}
          {cinemaFacilitiesResult.status === "success"
            ? cinemaFacilitiesResult.data.map((it) => (
                <CinemaFacilityCard key={it.id} {...it} />
              ))
            : null}
          {cinemaFacilitiesResult.status === "error" ? (
            <p>Error fetching movies</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

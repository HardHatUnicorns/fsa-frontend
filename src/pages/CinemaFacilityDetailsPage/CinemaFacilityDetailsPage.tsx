import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getCinemaFacilityDetails } from "~/api/CinemaService";
import { CinemaFacilityDetails } from "~/models/CinemaFacilityDetails";

export const CinemaFacilityDetailsPage = () => {
  const { facilityId } = useParams();

  const cinemaFacilitiesResult = useQuery<CinemaFacilityDetails>(
    ["cinema-facility", facilityId],
    () => getCinemaFacilityDetails(1, facilityId as string)
  );

  return (
    <div className="pl-20 pr-20 pt-28 flex flex-col h-full bg-gradient-to-t from-company-yellow">
      <div className="flex flex-col md:flex-row">
        <div className="mb-1 md:min-w-[300px]">
          <picture className="w-full h-auto">
            <img
              className="w-full h-auto"
              src="https://via.placeholder.com/470x270.png?text=Facility_Logo"
            />
          </picture>
        </div>
        <div className="flex flex-col grow md:px-8 lg:px-16 justify-center ">
          <h1 className="hidden md:block text-bold text-7xl mb-4">
            {cinemaFacilitiesResult.status === "success"
              ? cinemaFacilitiesResult.data.name
              : null}
          </h1>

          <h1 className="hidden md:block text-bold text-5xl mb-4">
            {cinemaFacilitiesResult.status === "success"
              ? cinemaFacilitiesResult.data.address
              : null}
          </h1>
        </div>
      </div>

      <div className="flex flex-row gap-y-5 gap-x-5 justify-between pt-10">
        <img
          className=" h-auto"
          src="https://via.placeholder.com/300x270.png?text=image_4"
        />

        <img
          className=" h-auto"
          src="https://via.placeholder.com/470x270.png?text=image_1"
        />
        <img
          className=" h-auto"
          src="https://via.placeholder.com/300x270.png?text=image_3"
        />
        <img
          className=" h-auto"
          src="https://via.placeholder.com/470x270.png?text=image_2"
        />
      </div>

      <div className="pt-10">{/*  TODO TICKETS*/}</div>
    </div>
  );
};

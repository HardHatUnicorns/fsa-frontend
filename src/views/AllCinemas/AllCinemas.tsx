import { useQuery } from "react-query";
import { Cinema } from "~/models/Cinema";
import { getCinemas } from "~/api/CinemaService";
import { CinemaCard } from "./CinemaCard";
import { ReactComponent as ArrowDownIcon } from "~/assets/icons/ArrowDown.svg";

export const AllCinemas = () => {
  const { data, isLoading, isFetched, isError } = useQuery<Cinema[]>(
    "all-cinemas",
    getCinemas
  );

  return (
    <div className="flex flex-col justify-center align-baseline pt-5">
      <h1 className="text-2xl md:text-5xl lg:text-7xl text-center mb-6 lg:mb-12 font-bold">
        Explore cinemas near you
      </h1>
      {isLoading ? <p>Loading..</p> : null}
      {isFetched ? (
        <>
          <div className="flex justify-center md:mb-8 lg:mb-10">
            <div className="flex flex-col align-center md:flex-row">
              {data?.map(({ id, name, address }) => (
                <CinemaCard key={id} name={name} url={address} id={id} />
              ))}
            </div>
          </div>
          <div className="flex flex-row px-4">
            <button>
              <ArrowDownIcon className="inline-block align-baseline mr-2" />
              {/*TODO use theme color `link` */}
              <span className="text-[#566CDF] text-2xl">See More</span>
            </button>
          </div>
        </>
      ) : null}
      {isError ? <p>An error ocurred!</p> : null}
    </div>
  );
};

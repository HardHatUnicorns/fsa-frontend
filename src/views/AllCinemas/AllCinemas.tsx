import { useQuery } from "react-query";
import { Cinema } from "../../models/Cinema";
import { getCinemas } from "../../services/CinemaService";
import { CinemaCard } from "./CinemaCard";

export const AllCinemas = () => {
  const { data, isLoading, isFetched, isError } = useQuery<Cinema[]>(
    "all-cinemas",
    getCinemas
  );

  return (
    <div>
      {isLoading ? <p>Loading..</p> : null}
      {isFetched ? (
        <>
          {data?.map(({ id, name, address }) => (
            <CinemaCard key={id} name={name} url={address} />
          ))}
        </>
      ) : null}
      {isError ? <p>An error ocurred!</p> : null}
    </div>
  );
};

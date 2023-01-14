import { CinemaFacility } from "../models/CinemaFacility";
import { CinemaFacilityDetails } from "../models/CinemaFacilityDetails";
import { CinemaDetails } from "../models/CinemaDetails";
import { Cinema } from "../models/Cinema";
import { api } from "./AxiosApiV1";

export const getCinemas = async (): Promise<Cinema[]> => {
  const { data } = await api.get("cinemas");
  return data;
};

export const getCinemaDetails = async (
  cinemaId: string | number
): Promise<CinemaDetails> => {
  const { data } = await api.get(`cinemas/${cinemaId}`);
  return data;
};

export const getCinemaFacilitiesByCinemaId = async (
  cinemaId: string | number
): Promise<CinemaFacility[]> => {
  const { data } = await api.get(`cinemas/${cinemaId}/facilities`);
  return data;
};

export const getCinemaFacilityDetails = async (
  cinemaId: number,
  facilityId: number | string
): Promise<CinemaFacilityDetails> => {
  const { data } = await api.get(
    `cinemas/${cinemaId}/facilities/${facilityId}`
  );
  return data;
};

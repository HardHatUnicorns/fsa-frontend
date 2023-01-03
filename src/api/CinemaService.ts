import axios from "axios";
import { CinemaFacility } from "../models/CinemaFacility";
import { CinemaFacilityDetails } from "../models/CinemaFacilityDetails";
import { CinemaDetails } from "../models/CinemaDetails";
import { Cinema } from "../models/Cinema";

export const getCinemas = async (): Promise<Cinema[]> => {
  const { data } = await axios.get(`${process.env.REACT_APP_API}cinemas`, {});
  return data;
};

export const getCinemaDetails = async (
  cinemaId: number
): Promise<CinemaDetails> => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API}cinemas/${cinemaId}`,
    {}
  );
  return data;
};

export const getCinemaFacilitiesByCinemaId = async (
  cinemaId: number
): Promise<CinemaFacility[]> => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API}cinemas/${cinemaId}/facilities`,
    {}
  );
  return data;
};

export const getCinemaFacilityDetails = async (
  cinemaId: number,
  facilityId: number
): Promise<CinemaFacilityDetails> => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API}cinemas/${cinemaId}/facilities/${facilityId}`,
    {}
  );
  return data;
};

import axios from "axios";

export type HeaderParams = {
    accessToken: string;
};

export const fetchStarwars = async (ids: string[], headers: HeaderParams) => {
  const response = await axios.get("https://swapi.dev/api/films/1/");
  return response.data;
};

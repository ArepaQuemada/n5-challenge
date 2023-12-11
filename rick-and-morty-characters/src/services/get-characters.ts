import { adaptGetCharacters } from "../adapters/adapt-get-characters";
import { ENDPOINTS } from "../config/endpoints";
import { HOSTS } from "../config/hosts";
import { Fetcher } from "../infra/fetcher/fetcher";

export type GetCharactersResponse = {
  results: {
    id: string;
    name: string;
    image: string;
    species: string;
  }[];
};

export const getCharacters = async () => {
  return adaptGetCharacters(
    await new Fetcher(`${HOSTS.harryPotterApi}`).get<GetCharactersResponse>(
      `${ENDPOINTS.getAllCharacters}`
    )
  );
};

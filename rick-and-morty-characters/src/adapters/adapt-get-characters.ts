import { CharacterInfo } from "../domain/character-info";
import { GetCharactersResponse } from "../services/get-characters";

export const adaptGetCharacters = (
  response: GetCharactersResponse
): CharacterInfo[] => {
  return response.results.map((character) => {
    return {
      id: character.id,
      name: character.name,
      image: character.image,
    };
  });
};

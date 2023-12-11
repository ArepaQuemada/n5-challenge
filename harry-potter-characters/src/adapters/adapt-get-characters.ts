import { CharacterInfo } from "../domain/character-info";
import { GetCharactersResponse } from "../services/get-characters";

export const adaptGetCharacters = (
  characters: GetCharactersResponse
): CharacterInfo[] => {
  return characters.map((character) => {
    return {
      id: character.id,
      name: character.name,
      image: character.image,
      house: character.house,
    };
  });
};

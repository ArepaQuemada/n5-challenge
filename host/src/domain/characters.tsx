import HarryPotter from "HarryPotter/App";
import RickAndMorty from "RickAndMorty/App";
import { Characters } from "./models/characters";

export type ChartactersMap = {
  [key in Characters]: React.FC;
};

export const charactersMap: ChartactersMap = {
  "harry-potter": HarryPotter,
  "rick-and-morty": RickAndMorty,
};

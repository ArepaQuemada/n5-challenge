export type Characters = "harry-potter" | "rick-and-morty";

export type CharactersNames = {
  [key in Characters]: string;
};

export const charactersNames: CharactersNames = {
  "harry-potter": "Harry Potter",
  "rick-and-morty": "Rick and Morty",
};

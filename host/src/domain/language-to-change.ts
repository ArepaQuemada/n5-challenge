import { Languages } from "./models/languages";

export const languageToChange = (lang: Languages) => {
  return lang === "en" ? "es" : "en";
};

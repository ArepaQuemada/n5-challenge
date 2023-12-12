import { Languages } from "./models/languages";

type TranslationsKeys = "switch-lan-es" | "switch-lang-en";

type ReturnLang = {
  langToChange: Languages;
  translationKey: TranslationsKeys;
};

export const languageToChange = (lang: Languages): ReturnLang => {
  return lang === "en"
    ? {
        langToChange: "es",
        translationKey: "switch-lan-es",
      }
    : {
        langToChange: "en",
        translationKey: "switch-lang-en",
      };
};

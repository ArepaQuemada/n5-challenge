import HarryPotterApp from "HarryPotter/App";
import RickAndMortyApp from "RickAndMorty/App";
import { useTranslation } from "react-i18next";
import { I18NPublisher } from "./infra/i18n/i18n-publisher";

function App() {
  const { t } = useTranslation();
  const switchLang = (lang: string) => {
    I18NPublisher.changeLanguage(lang);
  };
  return (
    <>
      <h1>{t("heading")}</h1>
      <p>{t("description")}</p>
      <button onClick={() => switchLang("es")}>Lang ES</button>
      <button onClick={() => switchLang("en")}>Lang EN</button>
      <HarryPotterApp />
      <RickAndMortyApp />
    </>
  );
}

export default App;

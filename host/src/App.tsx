import HarryPotterApp from "HarryPotter/App";
import RickAndMortyApp from "RickAndMorty/App";
import { useTranslation } from "react-i18next";
import SwitchLang from "./component/SwitchLang";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("heading")}</h1>
      <p>{t("description")}</p>
      <SwitchLang />
      <HarryPotterApp />
      <RickAndMortyApp />
    </>
  );
}

export default App;

import { useTranslation } from "react-i18next";
import SwitchLang from "./component/SwitchLang";
import { charactersMap } from "./domain/characters";
import { useState } from "react";
import SelectMicrofrontend from "./component/SelectMicrofrontend";
import { Characters } from "./domain/models/characters";

function App() {
  const { t } = useTranslation();
  const [selectMicrofront, onSelectMicrofront] =
    useState<Characters>("harry-potter");

  const Remote = charactersMap[selectMicrofront];
  return (
    <>
      <SwitchLang />
      <h1>{t("heading")}</h1>
      <p>{t("description")}</p>
      <SelectMicrofrontend
        onSelect={(microfront) => onSelectMicrofront(microfront)}
      />
      <Remote />
    </>
  );
}

export default App;

import { useTranslation } from "react-i18next";
import { charactersMap } from "./domain/characters";
import { useState } from "react";
import SelectMicrofrontend from "./components/SelectMicrofrontend/SelectMicrofrontend";
import { Characters } from "./domain/models/characters";
import Layout from "./layout/Layout";
import "./index.css";
import { H1Styled } from "./styled";

function App() {
  const { t } = useTranslation();
  const [selectMicrofront, onSelectMicrofront] =
    useState<Characters>("harry-potter");

  const Remote = charactersMap[selectMicrofront];
  return (
    <Layout>
      <H1Styled>
        <span>{t("main-heading")}</span>
        <br />
        <span>
          {t("heading-nonbreakable-aux")}
          &nbsp;
          {t("secondary-heading")}
          &nbsp;
          {t("end-heading")}
        </span>
      </H1Styled>
      <p>{t("description")}</p>
      <SelectMicrofrontend
        onSelect={(microfront) => onSelectMicrofront(microfront)}
      />
      <Remote />
    </Layout>
  );
}

export default App;

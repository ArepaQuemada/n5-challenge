import { useTranslation } from "react-i18next";
import "./infra/i18n/init-i18n.ts";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("hp-heading")}</h1>
    </>
  );
}

export default App;

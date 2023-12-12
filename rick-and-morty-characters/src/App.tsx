import { useTranslation } from "react-i18next";
import "./infra/i18n/init-i18n.ts";
import { useFetcher } from "./hooks/useFetcher.ts";
import { getCharacters } from "./services/get-characters.ts";
import { RMCard } from "./components/Card/RMCard.tsx";
import { GridCard } from "Host/GridCard";

function App() {
  const { t } = useTranslation();
  const { data, isLoading } = useFetcher({ promiseCallback: getCharacters });
  if (isLoading) return <>Loading...</>;
  return (
    <>
      <h1>{t("rm-heading")}</h1>
      <GridCard>
        {data?.map(({ id, image, name, species }) => (
          <RMCard key={id} image={image} name={name} species={species} />
        ))}
      </GridCard>
    </>
  );
}

export default App;

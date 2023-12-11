import { useTranslation } from "react-i18next";
import "./infra/i18n/init-i18n.ts";
import { useFetcher } from "./hooks/useFetcher.ts";
import { getCharacters } from "./services/get-characters.ts";
import { GridCard } from "./components/GridCard.ts/GridCard.tsx";
import { Card } from "./components/Card/Card.tsx";

function App() {
  const { t } = useTranslation();
  const { data, isLoading } = useFetcher({ promiseCallback: getCharacters });
  if (isLoading) return <>Loading...</>;
  return (
    <>
      <h1>{t("hp-heading")}</h1>
      <GridCard>
        {data?.map(({ id, image, name, house }) => (
          <Card key={id} image={image} name={name} house={house} />
        ))}
      </GridCard>
    </>
  );
}

export default App;

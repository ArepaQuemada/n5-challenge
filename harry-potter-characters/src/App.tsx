import { useTranslation } from "react-i18next";
import "./infra/i18n/init-i18n.ts";
import { useFetcher } from "./hooks/useFetcher.ts";
import { getCharacters } from "./services/get-characters.ts";
import { GridCard } from "Host/GridCard";
import { HPCard } from "./components/Card/HPCard.tsx";
import { H2Styled } from "./styled.ts";

function App() {
  const { t } = useTranslation();
  const { data, isLoading } = useFetcher({ promiseCallback: getCharacters });
  if (isLoading) return <>Loading...</>;
  return (
    <>
      <H2Styled>Harry&nbsp;Potter {t("hp-heading")}</H2Styled>
      <GridCard>
        {data?.map(({ id, image, name, house }) => (
          <HPCard key={id} image={image} name={name} house={house} />
        ))}
      </GridCard>
    </>
  );
}

export default App;

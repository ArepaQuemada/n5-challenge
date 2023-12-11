import { useTranslation } from "react-i18next";
import "./infra/i18n/init-i18n.ts";
import { useFetcher } from "./hooks/useFetcher.ts";
import { getCharacters } from "./services/get-characters.ts";

function App() {
  const { t } = useTranslation();
  const { data, isLoading } = useFetcher({ promiseCallback: getCharacters });
  if (isLoading) return <>Loading...</>;
  return (
    <>
      <h1>{t("rm-heading")}</h1>
      {data?.map((character) => (
        <div key={character.id}>
          <img
            src={character.image}
            alt={`${character.name} profile picture`}
            loading="lazy"
          />
          <p>
            <span>{t("character-name")}: </span>
            {character.name}
          </p>
        </div>
      ))}
    </>
  );
}

export default App;

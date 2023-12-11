import { useTranslation } from "react-i18next";
import { CardContainer } from "./styled";

interface CardProps {
  image: string;
  name: string;
  species: string;
}

export const Card = ({ image, name, species }: CardProps) => {
  const { t } = useTranslation();
  return (
    <CardContainer>
      <img
        className="--avatar"
        src={image}
        alt={`${name} profile picture`}
        loading="lazy"
      />
      <p className="--item">
        <span className="--item">{t("character-name")}: </span>
        <span className="--item-value">{name}</span>
      </p>
      <p>
        <span className="--item">{t("character-species")}: </span>
        <span className="--item-value">{species}</span>
      </p>
    </CardContainer>
  );
};

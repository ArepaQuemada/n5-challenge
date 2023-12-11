import { useTranslation } from "react-i18next";
import { CardContainer } from "./styled";

interface CardProps {
  image: string;
  name: string;
  house: string;
}

export const Card = ({ image, name, house }: CardProps) => {
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
        <span className="--item">{t("character-house")}: </span>
        <span className="--item-value">{house}</span>
      </p>
    </CardContainer>
  );
};

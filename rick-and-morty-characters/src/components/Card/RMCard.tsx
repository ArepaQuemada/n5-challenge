import { useTranslation } from "react-i18next";
import { CardContainer } from "./styled";

interface CardProps extends React.ComponentProps<typeof CardContainer> {
  species: string;
}

export const RMCard = ({ image, name, species }: CardProps) => {
  const { t } = useTranslation();
  return (
    <CardContainer image={image} name={name}>
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

import { useTranslation } from "react-i18next";
import { CardContainer } from "./styled";

interface CardProps extends React.ComponentProps<typeof CardContainer> {
  house: string;
}

export const HPCard = ({ image, name, house }: CardProps) => {
  const { t } = useTranslation();
  return (
    <CardContainer image={image} name={name}>
      <p className="--item">
        <span className="--item">{t("character-name")}: </span>
        <span className="--item-value">{name}</span>
      </p>
      <p className="--item">
        <span className="--item">{t("character-house")}: </span>
        <span className="--.item-house">{house}</span>
      </p>
    </CardContainer>
  );
};

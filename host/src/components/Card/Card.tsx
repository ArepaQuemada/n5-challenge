import { CardContainer } from "./styled";

interface CardProps {
  image: string;
  name: string;
  house: string;
  children?: React.ReactNode;
}

export const Card = ({ image, name, children }: CardProps) => {
  return (
    <CardContainer>
      <img
        className="--avatar"
        src={image}
        alt={`${name} profile picture`}
        loading="lazy"
      />
      {children}
    </CardContainer>
  );
};

import React from "react";
import { GridCardContainer } from "./styled";

interface GridCardProps {
  children: React.ReactNode;
}

export const GridCard = ({ children }: GridCardProps) => {
  return (
    <>
      <GridCardContainer>{children}</GridCardContainer>
    </>
  );
};

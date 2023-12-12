declare module "Host/Card" {
  import React from "react";
  interface CardProps {
    name: string;
    image: string;
    children?: React.ReactNode;
  }
  export const Card: React.FC<CardProps>;
}

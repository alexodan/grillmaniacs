import React from "react";
import Card from "../Card";
import { StyledGrid } from "./styles.css";

const CardsGrid = ({ items }) => {
  return (
    <StyledGrid>
      {items.map(grill => (
        <Card key={grill.id} {...grill} />
      ))}
    </StyledGrid>
  );
};

export default CardsGrid;

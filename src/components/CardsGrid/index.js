import React from "react";
import Card from "../Card";
import { css } from "@emotion/react";

const Grid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const CardsGrid = ({ items }) => {
  return (
    <Grid>
      {items.map(grill => (
        <Card key={grill.id} {...grill} />
      ))}
    </Grid>
  );
};

export default CardsGrid;

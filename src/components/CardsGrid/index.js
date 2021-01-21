import React from "react";
import styled from "styled-components";
import Card from "../Card";

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const CardsGrid = ({ items }) => {
  return (
    // flex flex-fluid columns-3
    <StyledGrid>
      {items.map(grill => (
        <Card key={grill.id} {...grill} />
      ))}
    </StyledGrid>
  );
};

export default CardsGrid;

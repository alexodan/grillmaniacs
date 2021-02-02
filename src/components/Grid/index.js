import React from "react";
import { StyledGrid } from "./styles.css";

const Grid = ({ cards }) => {
  return (
    <StyledGrid>
      {cards.map(({ url, image, title }) => (
        <div key={url}>
          <a href={url}>
            <img src={image} alt={title} />
            <span className="emphasized">{title}</span>
          </a>
        </div>
      ))}
    </StyledGrid>
  );
};

export default Grid;

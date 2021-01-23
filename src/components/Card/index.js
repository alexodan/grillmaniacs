import React from "react";
import { StyledCard } from "./styles.css";

const Card = ({ title, img }) => {
  return (
    <StyledCard>
      <a href="#">
        <img src={img} alt={title} />
        <h3 className="emphasized">{title}</h3>
      </a>
    </StyledCard>
  );
};

export default Card;

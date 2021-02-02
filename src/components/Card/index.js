import React from "react";
import { StyledCard } from "./styles.css";
import { images } from "../../images";

const Card = ({ title, img }) => {
  console.log(img);
  return (
    <StyledCard>
      <a href="#somewhere">
        <img src={images[img]} alt={title} />
        <h3 className="emphasized">{title}</h3>
      </a>
    </StyledCard>
  );
};

export default Card;

import React from "react";
import { StyledButton } from "./styles.css";

const ProductCard = product => {
  const { id, title, image, price, url } = product;
  return (
    <a href="#">
      <img src={image} alt={title} />
      <div>
        <span>{title}</span>
      </div>
      <div>
        <span>{price}</span>
      </div>
      <StyledButton>Buy in Amazon</StyledButton>
    </a>
  );
};

export default ProductCard;

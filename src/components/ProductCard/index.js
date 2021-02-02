import React from "react";
import {
  StyledButton,
  StyledPrice,
  StyledProductCard,
  StyledTitle
} from "./styles.css";

const ProductCard = ({ product }) => {
  const { title, image, price, url } = product;

  return (
    <StyledProductCard href={url}>
      <img src={image} alt={title} />
      <StyledTitle>
        <span>{title}</span>
      </StyledTitle>
      <StyledPrice>
        <span>{price} USD</span>
      </StyledPrice>
      <StyledButton>Buy in Amazon</StyledButton>
    </StyledProductCard>
  );
};

export default ProductCard;

import React from "react";
import {
  StyledButton,
  StyledPrice,
  StyledProductCard,
  StyledTitle
} from "./styles.css";

const ProductCard = ({ product }) => {
  const { id, title, image, price, url } = product;
  console.log(id, url, image);
  return (
    <StyledProductCard href="https://www.amazon.com">
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

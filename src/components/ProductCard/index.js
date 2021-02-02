import React from "react";
import {
  StyledButton,
  StyledPrice,
  StyledProductCard,
  StyledTitle
} from "./styles.css";
import { images } from "../../images";

const ProductCard = ({ product }) => {
  const { title, image, price, url } = product;

  return (
    <StyledProductCard href={url}>
      <img src={images[image]} alt={title} />
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

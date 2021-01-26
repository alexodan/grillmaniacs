import React from "react";
import ProductCard from "../ProductCard";
import { StyledGrid } from "./styles.css";

const ProductGallery = ({ products }) => {
  return (
    <StyledGrid>
      {products.map(p => (
        <ProductCard product={p} />
      ))}
    </StyledGrid>
  );
};

export default ProductGallery;

import React from "react";
import ProductCard from "../ProductCard";
import { StyledGrid } from "./styles.css";

const ProductGallery = ({ products }) => {
  return (
    <StyledGrid>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </StyledGrid>
  );
};

export default ProductGallery;

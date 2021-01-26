import React from "react";

const ProductCard = product => {
  return (
    <div>
      <pre>{JSON.stringify(product)}</pre>
    </div>
  );
};

export default ProductCard;

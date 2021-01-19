import React from "react";

const Card = ({ title, img }) => {
  return (
    <div>
      <span>{title}</span>
      <img src={img} alt={title} />
    </div>
  );
};

export default Card;

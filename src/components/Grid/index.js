import React from "react";
import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 2;
  gap: 20px;
  div {
    width: 340px;
    height: 220px;
    a:hover {
      text-decoration: none;
    }
  }
  img {
    width: 100%;
    height: 180px;
  }
  span {
    margin-top: 10px;
    display: block;
    color: black;
    font-size: 20px;
    font-weight: bold;
  }
`;

const Grid = ({ cards }) => {
  return (
    <StyledGrid>
      {cards.map(({ url, image, title }) => (
        <div key={url}>
          <a href={url}>
            <img src={image} alt={title} />
            <span className="emphasized">{title}</span>
          </a>
        </div>
      ))}
    </StyledGrid>
  );
};

export default Grid;

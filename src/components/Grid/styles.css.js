import styled from "styled-components";

export const StyledGrid = styled.div`
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

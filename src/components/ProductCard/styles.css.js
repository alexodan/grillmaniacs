import styled from "styled-components";

export const StyledProductCard = styled.a`
  border: 1px solid #ececec;
  display: block;
  padding: 5%;
  font-weight: bold;
  &:hover {
    text-decoration: none;
  }
  img {
    width: 90%;
  }
`;

export const StyledTitle = styled.div`
  margin-top: 5px;
`;

export const StyledPrice = styled.div`
  span {
    float: right;
    margin-bottom: 5px;
    color: rgb(51, 51, 51);
    font-size: 18px;
    &::after {
      clear: both;
    }
  }
`;

export const StyledButton = styled.button`
  background-color: #f4d17d;
  color: black;
  width: 100%;
  box-shadow: 0 1px 0 rgb(255 255 255 / 40%) inset;
  background: #f0c14b;
  background: linear-gradient(to bottom, #f7dfa5, #f0c14b) repeat scroll 0 0
    rgba(0, 0, 0, 0);
  border-radius: 3px;
  border-width: 1px;
  border-color: #9c7e31 #90742d #786025;
  display: block;
  margin: 10px auto 0 auto;
`;

import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  min-height: 360px;
  margin-top: 2rem;
  a {
    display: block;
  }
  a::after {
    content: "";
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.9) 100%
    );
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s linear;
  }
  a:hover:after {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 136, 204, 0)),
      to(rgba(0, 136, 204, 0.6))
    );
    background: linear-gradient(
      to bottom,
      rgba(0, 136, 204, 0) 0%,
      rgba(0, 136, 204, 0.6) 100%
    );
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }
  a h3 {
    position: absolute;
    bottom: 0;
    padding: 1rem;
    margin: 0;
    color: white;
    z-index: 10;
    width: 100%;
    font-size: 2rem;
    font-weight: 700;
  }
  a img {
    border: none;
    width: 100%;
    height: 100%;
    position: absolute;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: 50% 50%;
    object-position: 50% 50%;
  }
`;

import "@fontsource/quicksand";
import "@fontsource/oleo-script";
import styled from "styled-components";

export const GlobalStyles = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  html,
  body {
    color: #555;
    font-family: "Quicksand", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-size: 18px;
    line-height: 1.4;
    /* remove margin for the main div that Gatsby mounts into */
    > div {
      margin-top: 0;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #222;
    line-height: 1.25;
    text-rendering: optimizeLegibility;
    + * {
      margin-top: 0.5rem;
    }
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }
  strong {
    color: #222;
  }
  li {
    margin-top: 0.25rem;
  }
  .emphasized {
    font-family: "Oleo Script", sans-serif;
    letter-spacing: 1px;
  }
`;

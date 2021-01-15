import React from "react";
import TopMenu from "../TopMenu";
import { Global, css } from "@emotion/react";
import { GlobalStyles } from "./styles.css";

const Layout = ({ children }) => (
  <>
    <Global styles={GlobalStyles} />
    <TopMenu />
    <main
      css={css`
        margin: 2rem auto;
        max-width: 550px;
      `}
    >
      {children}
    </main>
  </>
);

export default Layout;

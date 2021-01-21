import React from "react";
import TopMenu from "../TopMenu";
import { GlobalStyles } from "./styles.css";

const Layout = ({ children }) => (
  <GlobalStyles>
    <TopMenu />
    <div className="container mx-auto p-4">{children}</div>
  </GlobalStyles>
);

export default Layout;

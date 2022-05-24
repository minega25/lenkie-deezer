import React from "react";
import styled from "styled-components";
import SEO from "../SEO";
import Header from "../Header";
import Footer from "../Footer";
import GlobalStyles from "../GlobalStyles";

const Main = styled.main`
  display: grid;
  grid-template-columns:
    1fr
    min(1100px, 100%)
    1fr;
  & > * {
    grid-column: 2;
  }
  padding-left: 12px;
  padding-right: 12px;
  @media screen and (min-width: 512px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <SEO />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;


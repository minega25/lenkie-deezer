import React from "react";
import styled from "styled-components";
import SEO from "../SEO";
import Header from "../Header";
import Footer from "../Footer";
import GlobalStyles from "../GlobalStyles";

const Wrapper = styled.span`
  display: grid;
  grid-template-columns:
    1fr
    min(1100px, 100%)
    1fr;
  & > * {
    grid-column: 2;
  }
  padding: 12px;
  @media screen and (min-width: 512px) {
    padding: 32px;
  }
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;

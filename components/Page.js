import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

const theme = {
  primary: "#065481",
  secondary: "#f9BD21",
  white: "#FEFEFE",
  teal: "#1fa7aa",
  blue: "#68B8D9",
  steelBlue: "#598DC1",
  violet: "#2C6480",
  orange: "#EB604D",
  red: "#FF0000",
  black: "#4F4F4E",
  grey: "#3A3A3A",
  lightgrey: "#D9DADA",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: 150rem;
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  @font-face {
    font-family: 'Rockwell';
    src: url('/static/rock.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Rockwell';
    src: url('/static/rockb.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('/static/Roboto-Medium.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Futura';
    src: url('/static/futura.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1;
    font-family: 'Rockwell';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'radnika_next'; }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;

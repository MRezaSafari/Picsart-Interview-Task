import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background};
    font-family: Nato, Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;

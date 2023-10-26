import { createGlobalStyle } from "styled-components";
import devices from "./utilities/theme/devices";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 30px 0;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    font-family: Nato, Open-Sans, Helvetica, Sans-Serif;
  }

  .container {
    max-width: 1280px;
    margin: auto;
    position: relative;
  }

  ul{
    list-style: none;
    padding: 0;
  }

  a{
    text-decoration: none;
    color: ${({ theme }) => theme.textColor};
  }

 h1,h2,h3,h4,h5,h6{
    margin: 0;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";
import devices from "./utilities/theme/devices";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    font-family: Nato, Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;

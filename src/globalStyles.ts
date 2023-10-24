import { createGlobalStyle } from "styled-components";
import devices from "./utilities/theme/devices";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    /* background: ${({ theme }) => theme.background}; */
    font-family: Nato, Open-Sans, Helvetica, Sans-Serif;

    @media ${devices.desktop} {
        background: #000;
    }

    @media ${devices.tablet} {
        background: #00f;
    }

    @media ${devices.mobile} {
        background: #f00;
    }
  }
`;

export default GlobalStyle;

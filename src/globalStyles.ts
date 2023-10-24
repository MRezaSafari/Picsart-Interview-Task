import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.bgColor};
    font-family: Nato, Open-Sans, Helvetica, Sans-Serif;
  }
`;
 
export default GlobalStyle;
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    padding-left: 0;
  }
`;

export default GlobalStyle;

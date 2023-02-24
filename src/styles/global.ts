import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, 'Open Sans', sans-serif;
    font-variant-numeric: tabular-nums;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-weight: 400;
    font-size: ${({ theme }) => theme.textSizes['text-md']};
    line-height: 160%;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;

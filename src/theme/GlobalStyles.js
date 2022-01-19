import { createGlobalStyle } from "styled-components"
import { FunctionalModules } from "./FunctionalModules"

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: Arial, Helvetica, sans-serif;
    transition: all 0.50s linear;
    margin: 0;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-image:
      linear-gradient(-90deg, transparent 0%, transparent 50%, white 50%, white 100%),
      linear-gradient(  0deg, rgba(0,0,0,.1) 0%, rgba(0,0,0,.1) 50%, white 50%, white 100%);
    background-size: 5px 5px;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    cursor: pointer;
  }

  :root {
    ${FunctionalModules};
  }
`;
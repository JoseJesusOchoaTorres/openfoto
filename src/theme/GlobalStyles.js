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
    margin: 0;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-image: radial-gradient(${({ theme }) => theme.colors.text}50 5%, transparent 5%);
    background-position: center;
    background-size: 23px 23px;
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
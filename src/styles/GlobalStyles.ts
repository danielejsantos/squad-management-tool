import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background-color: #f7f3f7;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: "Aktiv Grotesk", sans-serif;
  }
`;

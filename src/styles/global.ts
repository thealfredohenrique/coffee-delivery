import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.baseText};
  }

  body,
  button,
  input,
  textarea {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
  }
`;

export default GlobalStyle;

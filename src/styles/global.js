import { createGlobalStyle } from "styled-components";
// import {DEVICE_BREAKPOINT} from "../styles/deviceBreakpoints"

export default createGlobalStyle`


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  :root {
    font-size: 16px;

  }

  body {
    background-color: ${({theme}) => theme.DARK.Dark_400};
  }

  body, input, button{
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
  }

  li {
    list-style-type:none;
  }
  .sr-only {
    width: 1px;
    height: 1px;
    position: absolute;
    overflow: hidden;

    margin: -1;
    padding: 0;
    border: 0;
    appearance: none;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }
`

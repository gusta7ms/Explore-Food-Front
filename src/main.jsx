import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import Theme from "./styles/theme";
import GlobalStyles from "./styles/global";

import { SingUp } from "./pages/SingUp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <SingUp />

    </ThemeProvider>
  </React.StrictMode>
);

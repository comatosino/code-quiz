import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "./theme";
import { App } from "./App";
import { ColorModeToggle } from "./components/ColorModeToggle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ColorModeToggle />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);

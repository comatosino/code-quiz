import { type ThemeConfig } from "@chakra-ui/react";

const colorMode = localStorage.getItem("chakra-ui-color-mode");

const getColorMode = () => {
  if (!colorMode || colorMode === "light") {
    return "light";
  }
  if (colorMode === "dark") {
    return "dark";
  }
};

export const config: ThemeConfig = {
  initialColorMode: getColorMode(),
};

import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

import sun from "./sun.svg";
import moon from "./moon.svg";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  switchAnatomy.keys,
);

// custom variant for the chakra Switch component
// if checked, dark mode enabled
const colorMode = definePartsStyle({
  thumb: {
    bgColor: "goldenrod",
    maskImage: `url('${sun}')`,
    WebkitMaskImage: `url('${sun}')`,
    maskPosition: "center",
    maskRepeat: "no-repeat",
    maskSize: "cover",
    _checked: {
      maskImage: `url('${moon}')`,
      WebkitMaskImage: `url('${moon}')`,
      transform: `translateX(var(--switch-thumb-x)) scaleX(${-1})`,
    },
    _dark: {
      bgColor: `white`,
    },
  },
  track: {
    bgColor: "gray.200",
    _dark: {
      bgColor: "whiteAlpha.200",
    },
  },
});

export const colorModeSwitch = defineMultiStyleConfig({ variants: { colorMode } });

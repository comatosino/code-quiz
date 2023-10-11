import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  switchAnatomy.keys,
);

/**
 * custom variant for the Chakra Switch component that holds sun and moon svg elements
 * Note: to avoid a 'hiccup' in rendering while the browser fetches the other svg, use the public dir
 * https://vitejs.dev/guide/assets.html#the-public-directory
 * this way both svgs are cached immediately
 */
const colorMode = definePartsStyle({
  thumb: {
    bgColor: 'goldenrod',
    maskImage: 'url("/sun.svg")',
    WebkitMaskImage: 'url("/sun.svg")',
    maskPosition: 'center',
    maskRepeat: 'no-repeat',
    maskSize: 'cover',

    // if checked, dark mode enabled
    _dark: { bgColor: `whiteAlpha.800` },
    _checked: {
      maskImage: 'url("/moon.svg")',
      WebkitMaskImage: 'url("/moon.svg")',
      transform: `translateX(var(--switch-thumb-x)) scaleX(${-1})`, // flip
    },
  },
  track: {
    bgColor: 'blackAlpha.200',
  },
});

export const colorModeSwitch = defineMultiStyleConfig({ variants: { colorMode } });

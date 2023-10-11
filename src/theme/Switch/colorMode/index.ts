import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  switchAnatomy.keys,
);

const SUN_URL = `${import.meta.env.BASE_URL}/sun.svg`;
const MOON_URL = `${import.meta.env.BASE_URL}/moon.svg`;

/**
 * custom variant for the Chakra Switch component that holds sun and moon svg elements
 *
 * Note: to avoid a 'hiccup' in rendering while the browser fetches the other svg, use the public dir
 * this way both svgs are cached immediately
 *
 * Note: when using a base url (like for github pages) need vite's globally injected
 * import.meta.env.BASE_URL var so that both dev and prod can use
 *
 * https://vitejs.dev/guide/assets.html#the-public-directory
 *
 * https://vitejs.dev/guide/build.html#public-base-path
 */
const colorMode = definePartsStyle({
  thumb: {
    bgColor: 'goldenrod',
    maskImage: `url(${SUN_URL})`,
    WebkitMaskImage: `url(${SUN_URL})`,
    maskPosition: 'center',
    maskRepeat: 'no-repeat',
    maskSize: 'cover',

    // if checked, dark mode enabled
    _dark: { bgColor: `whiteAlpha.800` },
    _checked: {
      maskImage: `url(${MOON_URL})`,
      WebkitMaskImage: `url(${MOON_URL})`,
      transform: `translateX(var(--switch-thumb-x)) scaleX(${-1})`, // flip
    },
  },
  track: {
    bgColor: 'blackAlpha.200',
  },
});

export const colorModeSwitch = defineMultiStyleConfig({ variants: { colorMode } });

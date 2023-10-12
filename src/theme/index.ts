import { extendTheme } from '@chakra-ui/react';

import { config } from './config';
import { colors } from './colors';
import { colorModeSwitch } from './Switch/colorMode';

export const theme = extendTheme({
  config,
  colors,
  components: {
    Switch: colorModeSwitch,
  },
});

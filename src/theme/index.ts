import { extendTheme } from '@chakra-ui/react';

import { config } from './config';
import { colorModeSwitch } from './Switch/colorMode';

export const theme = extendTheme({
  config,
  components: {
    Switch: colorModeSwitch,
  },
});

import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { config } from './config';

export const colorModeLocalKey = 'pw-color-mode';

export const theme = extendTheme({
  config,
  colors,
});

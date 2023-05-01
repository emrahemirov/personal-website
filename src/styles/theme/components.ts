import { defineStyleConfig } from '@chakra-ui/react';

export const components = {
  Button: defineStyleConfig({
    defaultProps: { colorScheme: 'primary' },
    baseStyle: { size: 'sm' },
  }),
  Switch: defineStyleConfig({
    defaultProps: { colorScheme: 'primary' },
    baseStyle: { size: 'sm' },
  }),
  Checkbox: defineStyleConfig({
    defaultProps: { colorScheme: 'primary' },
    baseStyle: { size: 'sm' },
  }),
  Radio: defineStyleConfig({
    defaultProps: { colorScheme: 'primary' },
    baseStyle: { size: 'sm' },
  }),
  Tooltip: defineStyleConfig({
    baseStyle: { borderRadius: 2, p: 2, size: 'sm' },
  }),
};

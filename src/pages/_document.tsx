import { colorModeLocalKey, theme } from '@/styles/theme';
import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head />
      <body>
        <ColorModeScript
          initialColorMode={theme.config.initialColorMode}
          storageKey={colorModeLocalKey}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

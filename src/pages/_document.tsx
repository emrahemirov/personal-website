import { colorModeLocalKey, theme } from '@/styles/theme';
import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>
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

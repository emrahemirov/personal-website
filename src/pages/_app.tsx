import '@/styles/globals.css';
import { colorModeLocalKey, theme } from '@/styles/theme';
import { ChakraProvider, createLocalStorageManager } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Emrah Emirov</title>
      </Head>
      <ChakraProvider
        colorModeManager={createLocalStorageManager(colorModeLocalKey)}
        theme={theme}
      >
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default appWithTranslation(App);

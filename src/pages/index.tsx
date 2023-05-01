import * as React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next/types';
import Header from '@/components/Header';
import { Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box minH={'2000px'}>
      <Header />
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};

export default Home;

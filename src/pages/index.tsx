import * as React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next/types';
import Header from '@/components/Header';
import Me from '@/components/Me';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

const Home = () => {
  return (
    <>
      <Header />
      <Me />
      <Skills />
      <Projects />
    </>
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

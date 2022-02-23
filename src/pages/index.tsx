import Head from 'next/head';
import { ReactElement } from 'react';

import Heading from 'shared/heading';
import { useColorMode, useToggleColorMode } from 'theme/color-mode';
import { NextPageWithLayout } from 'types';
import GlobalLayout from 'shared/layouts/global-layout';
import VStack from 'shared/v-stack';
import BaseButton from 'shared/button/base-button';

const IndexPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Next and styled system starter</title>
      </Head>
      <Heading as='h1' color='primary' fontFamily='primary'>
        Hello world
      </Heading>
      <ToggleThemeBtn />
    </>
  );
};

IndexPage.getLayout = (page: ReactElement) => (
  <GlobalLayout>
    <VStack as='main' p={4} maxWidth='fit-content' mx='auto'>
      {page}
    </VStack>
  </GlobalLayout>
);

const ToggleThemeBtn = () => {
  const colorMode = useColorMode();
  const toggle = useToggleColorMode();
  return <BaseButton onClick={toggle}>{colorMode}</BaseButton>;
};

export default IndexPage;

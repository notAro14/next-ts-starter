import type { NextPage } from 'next';
import Head from 'next/head';

import Box from 'shared/box';
import Heading from 'shared/heading';
import { useColorMode, useToggleColorMode } from 'theme/color-mode';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next and styled system starter</title>
      </Head>
      <Box as='main' p={4} minHeight='100%' backgroundColor='background'>
        <Heading as='h1' color='primary' fontFamily='primary'>
          Hello
        </Heading>
        <ToggleThemeBtn />
      </Box>
    </>
  );
};

const ToggleThemeBtn = () => {
  const colorMode = useColorMode();
  const toggle = useToggleColorMode();
  return <button onClick={toggle}>{colorMode}</button>;
};

export default IndexPage;

import type { NextPage } from 'next';
import Head from 'next/head';

import Box from 'shared/box';
import Heading from 'shared/heading';
import { useColorMode } from 'theme/use-color-mode.hook';

const IndexPage: NextPage = () => {
  const [colorMode, toggle] = useColorMode();
  return (
    <>
      <Head>
        <title>Next and styled system starter</title>
      </Head>
      <Box as='main' p={4} minHeight='100%' backgroundColor='background'>
        <Heading as='h1' color='primary' fontFamily='primary'>
          Hello
        </Heading>
        <button onClick={toggle}>{colorMode}</button>
      </Box>
    </>
  );
};

export default IndexPage;

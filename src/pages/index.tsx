import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';

import Box from 'shared/box';
import { ColorModeContext } from 'theme';
import Heading from 'shared/heading';

const IndexPage: NextPage = () => {
  const switchColorMode = useContext(ColorModeContext);
  return (
    <>
      <Head>
        <title>Next and styled system starter</title>
      </Head>
      <Box as='main' p={4} minHeight='100%' backgroundColor='background'>
        <Heading as='h1' color='text' fontFamily='primary'>
          Hello
        </Heading>
        <button onClick={() => switchColorMode?.()}>Toggle</button>
      </Box>
    </>
  );
};

export default IndexPage;

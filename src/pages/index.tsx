import { FC } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Box from '../shared/box';
import Heading from '../shared/heading';
import Text from '../shared/text';

const Keyword: FC = ({ children }) => (
  <Text as='em' backgroundColor='accent' px={1}>
    {children}
  </Text>
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next TS starter | Styled system | Emotion</title>
      </Head>
      <Box
        height='100%'
        as='main'
        backgroundColor='background'
        fontFamily='body'
        padding={4}
      >
        <Heading as='h1' color='primary' fontSize='3xl'>
          Next TS starter
        </Heading>
        <Text color='text' fontSize='lg'>
          Next.js starter code written in <Keyword>typescript</Keyword>,{' '}
          <Keyword>styled-system</Keyword> and <Keyword>emotion</Keyword>.
        </Text>
      </Box>
    </>
  );
};

export default Home;

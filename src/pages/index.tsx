import type { NextPage } from 'next';
import Head from 'next/head';

import Box from '../shared/box';
import Heading from '../shared/heading';
import PageLayout from '../layout/page.layout';
import ReadingList from '../features/book/reading-list';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Next TS starter | Styled system | Emotion</title>
      </Head>
      <Box as='main' p={4} minHeight='calc(100% - 100px)'>
        <Heading as='h1' color='primary' fontSize='3xl'>
          To Read
        </Heading>
        <ReadingList />
      </Box>
    </PageLayout>
  );
};

export default Home;

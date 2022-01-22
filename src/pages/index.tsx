import type { NextPage } from 'next';
import Head from 'next/head';

import HelloWorld from '../features/hello-world';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next TS starter</title>
      </Head>
      <HelloWorld />
    </>
  );
};

export default Home;

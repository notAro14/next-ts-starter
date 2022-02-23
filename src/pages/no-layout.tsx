import type { NextPage } from 'next';
import Head from 'next/head';

import Heading from 'shared/heading';

const NoLayout: NextPage = () => {
  return (
    <>
      <Head>
        <title>No layout</title>
      </Head>
      <Heading>No layout</Heading>
    </>
  );
};

export default NoLayout;

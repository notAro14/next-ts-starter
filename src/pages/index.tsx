import type { NextPage } from 'next';
import Head from 'next/head';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vanilla next</title>
      </Head>
      <main
        style={{
          backgroundColor: '#333',
          color: 'white',
          fontFamily: 'sans-serif',
          height: '100%',
          padding: '1rem',
        }}
      >
        <h1>Hello</h1>
      </main>
    </>
  );
};

export default IndexPage;

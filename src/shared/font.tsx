import { FC } from 'react';
import Head from 'next/head';

interface FontProps {
  href: string;
}

/*
DO NOT USE DYNAMICALLY
STYLESHEET LINK MUST ONLY BE USED INSIDE CUSTOM DOCUMENT
*/

const Font: FC<FontProps> = ({ href }) => {
  return (
    <Head>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='true'
      />
      <link href={href} rel='stylesheet' />
    </Head>
  );
};

export default Font;
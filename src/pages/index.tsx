import { FC } from 'react';
import type { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import Box from '../shared/box';
import Flex from '../shared/flex';
import Heading from '../shared/heading';
import Text from '../shared/text';

//import { supabase } from '../utils/supabase-client';
import prisma from '../utils/prisma-client';
import type { definitions } from '../types/supabase';

type _Book = definitions['book'];
type _Author = definitions['author'];

interface Book extends _Book {
  author: Author[];
}

interface Author extends _Author {
  book: Book[];
}

export const getServerSideProps = async () => {
  try {
    //const { data, error } = await supabase
    //  .from<Book>('book')
    //  .select('*, author(*)');
    //if (error) throw error;
    const data = await prisma.book.findMany({
      include: { authors: true },
    });
    return {
      props: { data: JSON.parse(JSON.stringify(data)) as typeof data },
    };
  } catch (e) {
    throw e;
  }
};

const Keyword: FC = ({ children }) => (
  <Text as='em' backgroundColor='accent' px={1}>
    {children}
  </Text>
);

const Home = ({
  data: books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  //const [books, setBooks] = useState<Book[] | null>(null);
  //useEffect(() => {
  //  (async () => {
  //    try {
  //      const { data, error } = await supabase
  //        .from<Book>('book')
  //        .select('*, author(*)');
  //      if (error) throw error;
  //      setBooks(data);
  //    } catch (e) {
  //      console.error(e);
  //    }
  //  })();
  //}, []);
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
        {books?.length ? (
          <>
            <Heading color='primary'>List of Books</Heading>
            <ul>
              {books.map(({ id, title, authors }) => {
                return (
                  <Flex
                    key={id}
                    fontStyle='italic'
                    alignItems='baseline'
                    gap='1rem'
                  >
                    <Text as='li'>{title}</Text>
                    <Flex as='ul' gap='0.5rem'>
                      {authors.map(({ id, last_name }) => (
                        <Text color='accent' as='li' key={id}>
                          {last_name}
                        </Text>
                      ))}
                    </Flex>
                  </Flex>
                );
              })}
            </ul>
          </>
        ) : null}
      </Box>
    </>
  );
};

export default Home;

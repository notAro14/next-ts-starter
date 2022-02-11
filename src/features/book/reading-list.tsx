import { FC } from 'react';
import { useQuery } from 'react-query';

import Flex from '../../shared/flex';
import Text from '../../shared/text';

import { fetchBooks } from '../../api/books';

const ReadingList: FC = () => {
  const {
    isLoading,
    isError,
    data: books,
  } = useQuery('fetchBooks', fetchBooks);
  if (isLoading)
    return <Text role='progressbar'>Loading your reading list...</Text>;

  if (isError)
    return <Text role='alert'>Failed to load your reading list</Text>;

  return books?.length ? (
    <ul>
      {books.map(({ id, title, author }) => {
        return (
          <Flex as='li' key={id} alignItems='baseline' gap='1rem'>
            <Text as='span'>{title}</Text>
            <Flex as='ul' gap='0.5rem'>
              {author.map(({ id, last_name }) => (
                <Text fontStyle='italic' color='accent' as='li' key={id}>
                  {last_name}
                </Text>
              ))}
            </Flex>
          </Flex>
        );
      })}
    </ul>
  ) : null;
};

export default ReadingList;

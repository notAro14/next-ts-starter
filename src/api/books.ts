import type { definitions } from '../types/supabase';
import { supabase } from '../utils/supabase-client';

type _Book = definitions['book'];
type _Author = definitions['author'];

interface Book extends _Book {
  author: Author[];
}

interface Author extends _Author {
  book: Book[];
}

export const fetchBooks = async () => {
  try {
    const { data, error } = await supabase
      .from<Book>('book')
      .select('*, author(*)');
    if (error) throw error;
    return data;
  } catch (e) {
    throw e;
  }
};

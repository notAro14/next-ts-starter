import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../client/prisma';

const books = async (request: NextApiRequest, reply: NextApiResponse) => {
  const { method } = request;
  switch (method) {
    case 'GET': {
      try {
        const books = await prisma.book.findMany({
          select: {
            id: true,
            title: true,
            authors: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        });
        return reply.status(200).send(books);
      } catch (e) {
        return reply.status(500).json({ message: 'Failed to load books' });
      }
    }
    default:
      return reply
        .status(404)
        .json({ message: `${method} method is not supported` });
  }
};

export default books;

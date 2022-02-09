import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../client/prisma';

const authors = async (request: NextApiRequest, reply: NextApiResponse) => {
  const { method } = request;
  switch (method) {
    case 'GET': {
      try {
        const authors = await prisma.author.findMany({
          select: {
            id: true,
            name: true,
            books: {
              select: {
                book: {
                  select: {
                    id: true,
                    title: true,
                  },
                },
              },
            },
          },
        });
        return reply.status(200).send(authors);
      } catch (e) {
        return reply.status(500).json({ message: 'Failed to load authors' });
      }
    }

    case 'POST': {
      const { name, books } = request.body;
      try {
        const createdAuthor = await prisma.author.create({
          data: {
            name,
            books: {
              create: books.map(({ title }: { title: string }) => ({
                book: {
                  create: {
                    title,
                  },
                },
              })),
            },
          },
        });
        return reply.status(201).json(createdAuthor);
      } catch (e) {
        return reply.status(500).json({ message: 'Failed to create author' });
      }
    }
    default:
      return reply
        .status(404)
        .json({ message: `${method} method is not supported` });
  }
};

export default authors;

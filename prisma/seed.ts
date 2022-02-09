import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const savedAuthor = await prisma.author.create({
    data: {
      name: 'Nietzsche',
      books: {
        create: [
          {
            title: 'Le gai savoir',
          },
          {
            title: 'Ainsi parlait Zarathoustra',
          },
          {
            title: 'Ecce Homo',
          },
        ],
      },
    },
  });
  // eslint-disable-next-line no-console
  console.log('Author and books saved', savedAuthor);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

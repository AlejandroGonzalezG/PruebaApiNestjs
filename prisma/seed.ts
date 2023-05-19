import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const post1 = await prisma.article.upsert({
        where: { title: 'Prisma Adds Support for Mongodb' },
        update: {},
        create: {
            title: 'Prisma Adds Support for Mongodb',
            body: 'Support for Mongodb hasa been one of the most requested features since the initial release of...',
            description: "We are excited to share that today's Prisma ORM release adds table support for Mongodb!",
            published: false,
        },
    });

    const post2 = await prisma.article.upsert({
        where: { title: 'Prisma Adds Support for Mongodb 2' },
        update: {},
        create: {
            title: 'Prisma Adds Support for Mongodb 2',
            body: 'Support for Mongodb hasa been one of the most requested features since the initial release of... 2',
            description: "We are excited to share that today's Prisma ORM release adds table support for Mongodb! 2",
            published: true,
        },
    });

    console.log({ post1, post2})
};

main().catch((e) => {
    console.error(e);
    process.exit(1);
}).
finally(async () => {
    await prisma.$disconnect();
});
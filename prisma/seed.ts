import { Prisma } from "../generated/client/deno/edge.ts";
import prisma from '../src/utils/Databases.ts'

const data: Prisma.UserCreateInput[] = [];

for (let index = 1534; index <= 1000000; index++) {
  data.push({
      username: `user ${index}`,
      email: `user${index}gmail.com`,
      password: "123",     
  })
}

const userData: Prisma.UserCreateInput[] = data;

/**
 * Seed the database.
 */

for (const u of userData) {
  const user = await prisma.user.create({
    data: u,
  });
  console.log(`Created user with id: ${user.id}`);
}
console.log(`Seeding finished.`);

await prisma.$disconnect();

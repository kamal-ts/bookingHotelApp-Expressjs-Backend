import { Prisma } from "../generated/client/deno/edge.ts";
import prisma from '../src/utils/Databases.ts'

const userData: Prisma.UserCreateInput[] = [
  {
    username: "kamal",
    email: "kamaluddin1623@gmail.com",
    password: "123",

  },
  {
    username: "wais",
    email: "wais@gmail.com",
    password: "123",

  },
  {
    username: "andis",
    email: "andis@gmail.com",
    password: "123",
  },
  {
    username: "ceko",
    email: "ceko@gmail.com",
    password: "123",
  },
];

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

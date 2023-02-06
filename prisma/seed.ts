import { Prisma, PrismaClient } from "../generated/client/deno/edge.ts";
import { config } from "../deps.ts";

const envVars = await config();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "prisma://aws-us-east-1.prisma-data.com/?api_key=sHQsq89N_O1Muy0J3eZwpeXPwgmHS2XrPhj0ReMqprQGy-xsA9GAJS6Zpuwyo33R",
    },
  },
});

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

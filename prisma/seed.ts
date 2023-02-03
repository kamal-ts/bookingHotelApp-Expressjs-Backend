import { Prisma, PrismaClient } from "../generated/client/deno/edge.ts";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

const envVars = await config();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

const userData: Prisma.UserCreateInput[] = [
  {
    name: "kamal",
    email: "kamaluddin1623@gmail.com",
    password: "123",

  },
  {
    name: "wais",
    email: "wais@gmail.com",
    password: "123",

  },
  {
    name: "andis",
    email: "andis@gmail.com",
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
  console.log(`Created dinosaur with id: ${user.id}`);
}
console.log(`Seeding finished.`);

await prisma.$disconnect();

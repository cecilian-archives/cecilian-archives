/* eslint-disable no-console */
const { PrismaClient } = require("@prisma/client");
const dotenv = require("dotenv");

dotenv.config();
const db = new PrismaClient();

async function main() {
  // Seed data is database data that needs to exist for your app to run.
  // Ideally this file should be idempotent: running it multiple times
  // will result in the same database state (usually by checking for the
  // existence of a record before trying to create it). For example:
  //
  //   const existing = await db.user.findMany({ where: { email: 'admin@email.com' }})
  //   if (!existing.length) {
  //     await db.user.create({ data: { name: 'Admin', email: 'admin@email.com' }})
  //   }

  const existing = await db.accessKey.findMany();
  if (!existing.length) {
    await db.accessKey.create({
      data: { key: "The secret lies with Robyn" },
    });
  }

  console.info("Finished seeding data. See api/prisma/seed.js for info.");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect();
  });

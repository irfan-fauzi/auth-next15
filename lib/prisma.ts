import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

/*
🔹 Fungsi ini memastikan hanya ada satu instance Prisma di dalam aplikasi.
🔹 Jika ada banyak instance, aplikasi bisa crash atau terlalu banyak koneksi database.

*/
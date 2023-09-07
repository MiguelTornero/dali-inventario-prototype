import { PrismaClient } from "@prisma/client";

// Boilerplate so the db connection is saved between reloads
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
  };
  
  export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
      log:
          process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    });
  
  if (process.env.NODE_ENV !== "production") { globalForPrisma.prisma = prisma; }
// End of boilerplate

export async function getItems(limit: number, skip: number, sort: ('name' | 'createdAt' | 'lastModified' | 'quantity' | 'lastCostCents') = 'name', desc = true) {
    return prisma.item.findMany({
        skip: skip,
        take: limit,
        orderBy: {
          [sort]: desc ? 'desc' : 'asc'
        }
    })
}
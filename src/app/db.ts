import { Item, Prisma, PrismaClient } from "@prisma/client";

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

export type PlainItem = Omit<Item, "lastCost"> & {lastCost: string}

export async function getItems(limit: number, skip: number, sort: ('name' | 'createdAt' | 'lastModified' | 'quantity' | 'lastCostCents') = 'name', asc = true) : Promise<PlainItem[]> {
    const res : PlainItem[] = (await prisma.item.findMany({
        where: {
          enabled: true
        },
        skip: skip,
        take: limit,
        orderBy: {
          [sort]: asc ? 'asc' : 'desc'
        },
    })).map((v) => ({
      ...v,
      lastCost: v.lastCost.toString()
    }))
    return res
}

export async function addItem(itemData: Prisma.ItemCreateInput) {
  return await prisma.item.create({select: {id:true}, data: itemData})
}

export async function getItemById(id: number) : Promise<PlainItem | null> {
  const res = await prisma.item.findUnique({
    where: {
      id: id
    }
  })

  if (res === null) {return null}

  return {...res, lastCost: res.lastCost.toString()}
}

export async function updateItemById(id: number, data: Prisma.ItemUpdateInput) {
  return await prisma.item.update({
    where: {
      id: id
    },
    data: data
  })
}
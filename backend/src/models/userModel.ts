import { prisma } from "@/config/index.js";

export const upsertUser = async (
  id: bigint,
  firstName: string,
  username?: string
) => {
  return prisma.user.upsert({
    where: { id },
    update: { firstName, username },
    create: { id, firstName, username },
  });
};

// Refreshes the cached isAdmin flag from Telegram's own admin list — Telegram is always
// the source of truth, this just avoids a live API call on every marshal-assignment check.
// Call from the daily poll cycle (see services/scheduler.ts).
export const syncAdmins = async (adminIds: bigint[]) => {
  await prisma.user.updateMany({
    data: { isAdmin: false },
    where: { isAdmin: true, id: { notIn: adminIds } },
  });
  await prisma.user.updateMany({
    data: { isAdmin: true },
    where: { id: { in: adminIds } },
  });
};

export const getAdmins = async () => {
  return prisma.user.findMany({ where: { isAdmin: true } });
};

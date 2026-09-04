import { prisma } from "@/config/index.js";
import * as userModel from "@/models/userModel.js";

const todayDateOnly = () => {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  return today;
};

// One vote per user per day (see spec doc "Daily flow") — re-voting the same day
// overwrites the previous choice rather than creating a second row.
export const recordVote = async (
  user: { id: bigint; firstName: string; username?: string },
  slot: string | null
) => {
  await userModel.upsertUser(user.id, user.firstName, user.username);

  const date = todayDateOnly();
  return prisma.vote.upsert({
    where: { userId_date: { userId: user.id, date } },
    update: { slot },
    create: { userId: user.id, date, slot },
  });
};

export const getVotesForDateSlot = async (date: Date, slot: string) => {
  return prisma.vote.findMany({
    where: { date, slot },
    include: { user: true },
  });
};

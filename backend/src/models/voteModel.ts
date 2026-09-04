import { prisma } from "@/config/index.js";

// TODO: define a Vote model in prisma/schema.prisma (userId, chatId, slot, date), then
// implement these against `prisma`.

export const recordVote = async (
  userId: number,
  slot: string | null,
  chatId: number
) => {
  throw new Error("Not implemented: voteModel.recordVote");
};

export const getVotesForSlot = async (slotInstanceId: string) => {
  throw new Error("Not implemented: voteModel.getVotesForSlot");
};

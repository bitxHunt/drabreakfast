import { prisma } from "@/config/index.js";

// TODO: define Score fields (points, streak, strikes) in prisma/schema.prisma, then
// implement these against `prisma`.

// Applies streak+1/points+1 or strike+1 per voter, per the finalized attendance for
// one slot. Called right after attendanceModel.finalizeAttendance.
export const applyResultsForSlot = async (slotInstanceId: string) => {
  throw new Error("Not implemented: scoreModel.applyResultsForSlot");
};

export const getLeaderboard = async (chatId: number) => {
  throw new Error("Not implemented: scoreModel.getLeaderboard");
};

import { prisma } from "@/config/index.js";

// TODO: define an Attendance model (or a short-lived draft table) in
// prisma/schema.prisma, then implement these against `prisma`.

// Flips one person's present/absent flag in the in-progress checklist — nothing
// permanent until finalizeAttendance runs. See spec doc "Checklist" section.
export const toggleDraftPresence = async (callbackData: string) => {
  throw new Error("Not implemented: attendanceModel.toggleDraftPresence");
};

// Commits the current draft as the slot's final attendance record. See spec doc
// "/submit flow" — this is what /submit calls on success.
export const finalizeAttendance = async (slotInstanceId: string) => {
  throw new Error("Not implemented: attendanceModel.finalizeAttendance");
};

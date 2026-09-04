import { prisma } from "@/config/index.js";

// TODO: define a MarshalAssignment model in prisma/schema.prisma (slotInstanceId,
// marshalUserId, isStandIn), then implement these against `prisma`.

export const getAssignedMarshal = async (slotInstanceId: string) => {
  throw new Error("Not implemented: marshalModel.getAssignedMarshal");
};

// Per spec doc: if an admin voted into a slot, auto-assign them (round robin if more
// than one); otherwise the slot has no marshal until assignStandIn is called.
export const autoAssignFromAdminVotes = async (slotInstanceId: string) => {
  throw new Error("Not implemented: marshalModel.autoAssignFromAdminVotes");
};

export const assignStandIn = async (
  slotInstanceId: string,
  standInUserId: number
) => {
  throw new Error("Not implemented: marshalModel.assignStandIn");
};

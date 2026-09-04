import { z } from "zod";
import { SESSION_SLOTS } from "@/types/bot.type.js";

export const voteSchema = z.object({
  slot: z.enum(SESSION_SLOTS).nullable(), // null = "not coming"
});

export type VoteInput = z.infer<typeof voteSchema>;

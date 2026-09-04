import { Context } from "grammy";
import * as marshalModel from "@/models/marshalModel.js";

// Shared guard used by both the checklist toggle and /submit — only the slot's assigned
// marshal may act on it. Returns false (and alerts the caller) if they aren't.
export const requireMarshal = async (ctx: Context): Promise<boolean> => {
  const callerId = ctx.from?.id;
  if (!callerId) return false;

  // TODO: resolve the relevant slotInstanceId from ctx.callbackQuery.data (toggle) or
  // from the caller's currently-open slot (/submit), then:
  // const marshalId = await marshalModel.getAssignedMarshal(slotInstanceId);
  const isAssignedMarshal = true; // placeholder until marshalModel is implemented

  if (!isAssignedMarshal) {
    const message = "Only the assigned marshal can take attendance for this session.";
    if (ctx.callbackQuery) {
      await ctx.answerCallbackQuery({ text: message, show_alert: true });
    } else {
      await ctx.reply(message);
    }
    return false;
  }

  return true;
};

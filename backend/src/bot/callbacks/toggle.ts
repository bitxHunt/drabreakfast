import { Context } from "grammy";
import * as marshalAuthMiddleware from "@/middlewares/marshalAuthMiddleware.js";
import * as attendanceModel from "@/models/attendanceModel.js";

// Fires on every checklist button tap. See spec doc "Checklist — how the marshal marks
// people present": only the assigned marshal's taps should actually flip anything.
export const handle = async (ctx: Context) => {
  try {
    const data = ctx.callbackQuery?.data;
    if (!data?.startsWith("toggle:")) return;

    const isMarshal = await marshalAuthMiddleware.requireMarshal(ctx);
    if (!isMarshal) return; // requireMarshal already answered the callback with an alert

    // TODO: parse slotInstanceId + targetUserId out of `data`, flip their present/absent
    // flag in the draft record, then edit the message to redraw that one button.
    await attendanceModel.toggleDraftPresence(data);
    await ctx.answerCallbackQuery();
  } catch (error) {
    console.log("Error handling checklist toggle: ", error);
    await ctx.answerCallbackQuery({ text: "Something went wrong." });
  }
};

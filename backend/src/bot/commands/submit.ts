import { Context } from "grammy";
import * as marshalAuthMiddleware from "@/middlewares/marshalAuthMiddleware.js";
import * as attendanceModel from "@/models/attendanceModel.js";
import * as scoreModel from "@/models/scoreModel.js";

export const handle = async (ctx: Context) => {
  try {
    // See spec doc "/submit flow": auth check -> already-submitted check -> deadline
    // check (still open, see spec doc) -> finalize + score on success.
    const isMarshal = await marshalAuthMiddleware.requireMarshal(ctx);
    if (!isMarshal) return;

    // TODO: resolve the caller's currently-open slot instance, then:
    // await attendanceModel.finalizeAttendance(slotInstanceId);
    // await scoreModel.applyResultsForSlot(slotInstanceId);
    await ctx.reply("TODO: lock in attendance for the caller's assigned slot.");
  } catch (error) {
    console.log("Error handling /submit: ", error);
    await ctx.reply("Something went wrong submitting attendance.");
  }
};

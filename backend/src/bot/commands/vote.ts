import { Context } from "grammy";
import * as voteModel from "@/models/voteModel.js";

export const handle = async (ctx: Context) => {
  try {
    // TODO: present the day's session slots as inline buttons (see spec doc), then on
    // selection call voteModel.recordVote(ctx.from.id, slotId, ctx.chat.id).
    await ctx.reply("TODO: show today's slot options to vote on.");
  } catch (error) {
    console.log("Error handling /vote: ", error);
    await ctx.reply("Something went wrong recording your vote.");
  }
};

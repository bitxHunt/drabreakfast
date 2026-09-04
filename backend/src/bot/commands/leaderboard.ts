import { Context } from "grammy";
import * as scoreModel from "@/models/scoreModel.js";

export const handle = async (ctx: Context) => {
  try {
    if (!ctx.chat) return;
    // TODO: scoreModel.getLeaderboard(ctx.chat.id) -> ranked by points, tie-broken by streak.
    await ctx.reply("TODO: post the ranked points/streak/strikes table.");
  } catch (error) {
    console.log("Error handling /leaderboard: ", error);
    await ctx.reply("Something went wrong loading the leaderboard.");
  }
};

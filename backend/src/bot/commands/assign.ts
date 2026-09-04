import { Context } from "grammy";
import * as marshalModel from "@/models/marshalModel.js";

export const handle = async (ctx: Context) => {
  try {
    // TODO: only valid when no admin voted into a slot — let any admin name a stand-in
    // marshal for that slot via marshalModel.assignStandIn(slotInstanceId, standInUserId).
    await ctx.reply("TODO: name a stand-in marshal for an unclaimed slot.");
  } catch (error) {
    console.log("Error handling /assign: ", error);
    await ctx.reply("Something went wrong assigning a marshal.");
  }
};

import { Context } from "grammy";
import * as voteModel from "@/models/voteModel.js";

// Fires when someone taps a slot button on the /poll message. `none` = not coming.
export const handle = async (ctx: Context) => {
  try {
    const data = ctx.callbackQuery?.data;
    if (!data || !ctx.from) return;

    const slot = data.replace("vote:", "");
    await voteModel.recordVote(
      {
        id: BigInt(ctx.from.id),
        firstName: ctx.from.first_name,
        username: ctx.from.username,
      },
      slot === "none" ? null : slot
    );

    await ctx.answerCallbackQuery({ text: "Vote recorded." });
  } catch (error) {
    console.log("Error handling vote callback: ", error);
    await ctx.answerCallbackQuery({ text: "Something went wrong." });
  }
};

import { Context, InlineKeyboard } from "grammy";
import { SESSION_SLOTS } from "@/types/bot.type.js";

// Manually triggered by any group member (no cron/scheduler needed — see spec doc
// "Hosting"). Posts today's slot options as buttons; tapping one records a vote via
// the vote callback handler.
export const handle = async (ctx: Context) => {
  try {
    const keyboard = new InlineKeyboard();
    for (const slot of SESSION_SLOTS) {
      keyboard.text(slot, `vote:${slot}`).row();
    }
    keyboard.text("Not coming", "vote:none");

    await ctx.reply("Breakfast today — pick your slot:", {
      reply_markup: keyboard,
    });
  } catch (error) {
    console.log("Error handling /poll: ", error);
    await ctx.reply("Something went wrong posting today's poll.");
  }
};

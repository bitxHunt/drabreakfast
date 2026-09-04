import { Context } from "grammy";

// Quick manual check that the bot is alive and responding — not a real feature,
// just useful while testing/hosting. Not documented in the README on purpose.
export const handle = async (ctx: Context) => {
  const uptimeSeconds = Math.floor(process.uptime());
  await ctx.reply(`✅ Bot is up. Uptime: ${uptimeSeconds}s`);
};

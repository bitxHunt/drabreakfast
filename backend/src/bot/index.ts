import { Bot } from "grammy";
import { env } from "@/config/env.js";
import * as voteCommand from "@/bot/commands/vote.js";
import * as submitCommand from "@/bot/commands/submit.js";
import * as assignCommand from "@/bot/commands/assign.js";
import * as leaderboardCommand from "@/bot/commands/leaderboard.js";
import * as toggleCallback from "@/bot/callbacks/toggle.js";

export const bot = new Bot(env.BOT_TOKEN);

bot.command("vote", voteCommand.handle);
bot.command("submit", submitCommand.handle);
bot.command("assign", assignCommand.handle);
bot.command("leaderboard", leaderboardCommand.handle);

bot.on("callback_query:data", toggleCallback.handle);

export const startBot = () => {
  bot.start();
  console.log("Bot started (long polling)");
};

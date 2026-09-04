import { Bot } from "grammy";
import { env } from "@/config/env.js";
import * as pollCommand from "@/bot/commands/poll.js";
import * as testCommand from "@/bot/commands/test.js";
import * as submitCommand from "@/bot/commands/submit.js";
import * as assignCommand from "@/bot/commands/assign.js";
import * as leaderboardCommand from "@/bot/commands/leaderboard.js";
import * as voteCallback from "@/bot/callbacks/vote.js";
import * as toggleCallback from "@/bot/callbacks/toggle.js";

export const bot = new Bot(env.BOT_TOKEN);

bot.command("poll", pollCommand.handle);
bot.command("test", testCommand.handle);
bot.command("submit", submitCommand.handle);
bot.command("assign", assignCommand.handle);
bot.command("leaderboard", leaderboardCommand.handle);

bot.callbackQuery(/^vote:/, voteCallback.handle);
bot.callbackQuery(/^toggle:/, toggleCallback.handle);

export const startBot = () => {
  bot.start();
  console.log("Bot started (long polling)");
};

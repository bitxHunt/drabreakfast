import { bot } from "@/bot/index.js";
import * as userModel from "@/models/userModel.js";

// Pulls the live admin list straight from Telegram and refreshes the cached isAdmin
// flags on User — run this on a schedule (see services/scheduler.ts), not just once,
// since admins can be promoted/demoted in the group at any time.
export const syncAdminsFromTelegram = async (chatId: number) => {
  const admins = await bot.api.getChatAdministrators(chatId);
  const adminIds = admins.map((admin) => BigInt(admin.user.id));
  await userModel.syncAdmins(adminIds);
};

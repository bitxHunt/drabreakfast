import cron from "node-cron";
import { env } from "@/config/env.js";

// A persistent process (long-polling, not serverless) means scheduling is just
// node-cron in-process — no external scheduler needed. Times below are placeholders.
export const startScheduler = () => {
  // Daily poll, night before (e.g. 21:00 Sun-Fri for the next day's breakfast).
  cron.schedule(
    "0 21 * * 0-4",
    () => {
      // TODO: postDailyPoll()
    },
    { timezone: env.TIMEZONE }
  );

  // TODO: schedule one job per session slot (07:00, 07:45, 08:30, ...) to open that
  // slot's checklist, plus a deadline-warning job partway into each 45-minute window.
};

# 🍳 Drabreakfast Bot

## Description

A Telegram bot that turns "you coming for breakfast?" into a running group game. Monday to Saturday, everyone in the chat votes on the breakfast slots they're joining. **Show up when you said you would** and build a streak to beat your fellows. Say yes and bail, and you take a strike. **Three strikes and you are kicked**.

## Inspiration

Group breakfast plans fall apart the same way every time: someone votes "yes" in the chat, then never shows, and nobody tracks it or calls it out. Traditional check-in ("tap this button when you're here") doesn't actually prove anyone showed up. Meet **Drabreakfast** made to build and nurture good habits of rising early in the morning to have good breakfast with your peers. 

## Commands

- `/vote` — pick your slot for today, or opt out
- `/submit` — marshal-only, locks in attendance for their slot
- `/assign` — admin pool names a stand-in marshal for an unclaimed slot
- `/leaderboard` — points, streaks, strikes

## Tech Stack

- **Bot**: Node/TypeScript, [grammY](https://grammy.dev/)
- **Backend**: Express (health-check only — all real interaction is through the bot)
- **DB**: Postgres via Prisma
- **Scheduling**: node-cron, in-process (long polling means no external scheduler is needed)

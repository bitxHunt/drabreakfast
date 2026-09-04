import { config } from "dotenv";
import { z } from "zod";

const nodeEnv = process.env.NODE_ENV || "development";
config({ path: `.env.${nodeEnv}` });

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.coerce.number().min(1),
  BOT_TOKEN: z.string().min(1),
  DATABASE_URL: z.string().min(1),
  TIMEZONE: z.string().min(1).default("Asia/Singapore"),
});

export const env = envSchema.parse(process.env);

import app from "./src/app.js";
import { env } from "@/config/env.js";
import { startBot } from "@/bot/index.js";

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Health-check server running on port ${PORT}`);
});

startBot();

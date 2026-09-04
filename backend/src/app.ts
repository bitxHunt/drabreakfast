import express from "express";

const app = express();
app.use(express.json());

// Host-level uptime check only — all real interaction happens through the bot (long polling), not HTTP.
app.get("/health", (_req, res) => {
  res.status(200).json({ success: true, message: "ok" });
});

export default app;

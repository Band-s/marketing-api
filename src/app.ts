import express from "express";

const CAMPAIGNS = [
  { id: "fall-2026", headline: "Accept payments in 40+ currencies", active: true },
  { id: "summer-2026", headline: "Zero-fee payouts for new merchants", active: false },
];

export function createApp() {
  const app = express();
  app.get("/healthz", (_req, res) => {
    res.json({ ok: true });
  });
  app.get("/api/campaigns", (req, res) => {
    const activeOnly = req.query.active === "true";
    res.json(activeOnly ? CAMPAIGNS.filter((c) => c.active) : CAMPAIGNS);
  });
  return app;
}

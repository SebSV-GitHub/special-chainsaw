import express, { json } from "express";
import load from "./loaders";
import modules from "./modules";
import logTransaction from "./middlewares/logTransaction";

const app = new express();

app.use(json());

load();

app.get("/health-check", (_req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
  });
});

app.use(modules);

app.use(logTransaction);

app.listen(8080, () => {
  console.log("App running");
});

import { Router } from "express";
import requestMiddleware from "../../utils/requestMiddleware";
import * as controller from "./controller";

const router = Router();

router.get(
  "/transactions",
  requestMiddleware(async (_req, res) => {
    const transactions = await controller.getTransactions();
    res.json({ transactions });
  })
);

export default router;

import { Router } from "express";
import requestMiddleware from "../../utils/requestMiddleware";
import * as controller from "./controller";

const router = Router();

router.get(
  "/transactions",
  requestMiddleware(async (req, res) => {
    const { page } = req.query || 1;
    const transactions = await controller.getTransactions(page);
    res.json({ transactions });
  })
);

export default router;

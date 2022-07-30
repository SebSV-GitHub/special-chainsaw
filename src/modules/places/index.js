import { Router } from "express";
import validateAuth from "../../middlewares/validateAuth";
import requestMiddleware from "../../utils/requestMiddleware";

const router = Router();

router.get(
  "/places/restaurants",
  validateAuth,
  requestMiddleware((req, res) => {
    const x = req.token;
    res.json({ message: "OK", x });
  })
);

export default router;

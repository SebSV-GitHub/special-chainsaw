import { Router } from "express";
import requestMiddleware from "../../utils/requestMiddleware";
import * as controller from "./controller";

const router = Router();

router.post(
  "/authentications",
  requestMiddleware(async (req, res) => {
    const credentials = req.body;
    const token = await controller.authenticate(credentials);
    res.json({ token });
  })
);

export default router;

import { Router } from "express";
import requestMiddleware from "../../utils/requestMiddleware";
import * as controller from "./controller";

const router = Router();

router.post(
  "/users",
  requestMiddleware((req, res) => {
    const user = req.body;
    controller.postUser(user);
    res.sendStatus(201);
  })
);

export default router;

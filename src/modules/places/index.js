import { Router } from "express";
import validateAuth from "../../middlewares/validateAuth";
import requestMiddleware from "../../utils/requestMiddleware";
import * as controller from "./controller";

const router = Router();

router.get(
  "/places/restaurants",
  validateAuth,
  requestMiddleware(async (req, res) => {
    const { latitude, longitude } = req.query;
    const { data } = await controller.getNearRestaurants({
      latitude,
      longitude,
    });
    res.json({ restaurants: data.results });
  })
);

export default router;

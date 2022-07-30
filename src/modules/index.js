import { Router } from "express";
import UsersModule from "./user";
import AuthenticationsModule from "./authentication";
import PlacesModule from "./places";
import TransactionModule from "./Transactions";

const router = Router();

router.use(
  "/api",
  UsersModule,
  AuthenticationsModule,
  PlacesModule,
  TransactionModule
);

export default router;

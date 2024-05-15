import { Router } from "express";
import usersRouter from "./router/users.mjs";
import plansRouter from "./router/plans.mjs";

const router = Router();
router.use(usersRouter);
router.use(plansRouter);


export default router
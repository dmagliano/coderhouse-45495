import { Router } from "express";
import { saveUser } from "../controller/register-controller.js";

const router = Router();

router.post("/", saveUser);

export default router;

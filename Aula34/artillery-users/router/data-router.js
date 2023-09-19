import { Router } from "express";
import { getFakeData } from "../controller/data-controller.js";

const router = Router();

router.get("/", getFakeData);

export default router;
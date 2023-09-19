import { Router } from "express";
import { getUsers, getUserById } from "../controller/user-controller.js";

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUserById);

export default router;
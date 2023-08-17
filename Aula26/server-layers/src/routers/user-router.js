import { Router } from "express";
import UserController from "../controllers/user-controller.js";

const router = new Router();

router.get("/", UserController.getUsers);
router.post("/", UserController.createUser);
router.get("/:id", UserController.getUserById);
router.delete("/:id", UserController.deleteUserById);

export default router;
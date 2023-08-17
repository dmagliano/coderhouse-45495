import { Router } from "express";
import ToyController from "../controllers/toy-controller.js";

const router = Router();

    router.get('/', ToyController.getToys);
    router.post('/', ToyController.createToy);
    router.put('/:id', ToyController.updateToy);

export default router;

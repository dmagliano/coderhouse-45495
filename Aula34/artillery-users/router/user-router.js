import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("User router");
});

router.get("/:id", (req, res) => {
    res.send(`User router id: ${req.params.id}`);
});

export default router;
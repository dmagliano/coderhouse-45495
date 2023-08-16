import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("User router");
});

export default router;
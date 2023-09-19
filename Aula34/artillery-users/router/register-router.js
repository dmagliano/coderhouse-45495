import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Register router");
});

router.post("/", (req, res) => {
    let{ nome, sobrenome, email, senha } = req.body;
    let user = { nome, sobrenome, email, senha };
    res.send(user);
});

export default router;
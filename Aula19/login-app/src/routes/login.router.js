import { Router } from 'express';
import { UserModel } from '../models/user.model.js';
import cookieParser from 'cookie-parser';
import session from "express-session";
import { createHash } from '../utils.js';
import { isValidPassword } from '../utils.js';

const router = Router();

router.get('/', async (req, res) => {
    console.log(req.session);
    if (req.session.logged) {
        res.send('Você esta logado');
    } else {
        res.send('Faça login para ver essa pagina');
    }
});

router.post('/recovery', async (req, res) => {
    let { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email });
        if (user == null) {
            res.status(404)
        } else {
            user.password = createHash(password);
            user.save()
            res.send('Senha alterada com sucesso');
        }
    }
    catch (error) {
        res.status(400).json({ erro: error.message });
    }
});

router.post('/', async (req, res) => {
    let { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email });
        if (user == null) {
            res.status(404)
        }
        if (!isValidPassword(user, password)) {
            res.status(403).json({ erro: "Senha incorreta" });
        } else {
            req.session.user = email;
            req.session.logged = true;
            res.send('Login realizado com sucesso');
        }
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
});

export default router;
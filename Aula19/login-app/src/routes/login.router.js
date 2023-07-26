import { Router } from 'express';
import { UserModel } from '../models/user.model.js';
import cookieParser from 'cookie-parser';
import session from "express-session";
import { createHash } from '../utils.js';
import { isValidPassword } from '../utils.js';
import passport from 'passport';

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

router.post('/', passport.authenticate('login',{failureRedirect:'/api/login/faillogin'}) ,async (req, res) => {
    console.log("Login realizado com sucesso");
    if(!req.user){
        return res.status(400).send('Usuario ou senha invalidos');
    }
    res.send('Login realizado com sucesso');
});

router.get('/faillogin', (req, res) => {
    res.status(404).send('Falha no login');
});

export default router;
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

router.post('/', passport.authenticate('jwt',{session:false}), async (req, res) => {
    console.log("Login realizado com sucesso");
    if(!req.user){
        return res.status(400).send('Usuario ou senha invalidos');
    }
    res.send('Login realizado com sucesso');
});

export default router;
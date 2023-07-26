import { Router } from 'express';
import { UserModel } from '../models/user.model.js';
import passport from 'passport';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
});

router.post('/', passport.authenticate('register', {failureRedirect:'/failregister'}) ,async (req, res) => {
    res.send('Usuario criado com sucesso');
});

router.get('/failregister', (req, res) => {
    res.status(400).send({erro: 'Falha ao criar usuario'});
});

export default router;
import { Router } from 'express';
import { UserModel } from '../models/user.model.js';
import passport from 'passport';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const users = await UserModel.find({}, ['name', 'email']);
        console.log(users);
        res.status(200).json(users);
    }
    catch (error) {
        res.status(400).json({ erro: error.message });
    }
});

router.post('/login', passport.authenticate('jwt', {session: false}), (req, res) => {
    const user = req.user;
    if(!user) {
        res.status(404).send('User not found');
    } else {
        res.send(user);
    }
});

router.post('/register', (req, res) => {
    const newUser = req.body;
    const existingUser = UserModel.findOne({ email: newUser.email });
    if (existingUser) {
        res.status(400).send('Email already registered');
    } else {
        const user = UserModel.create(newUser);
        console.log('user criado: ' + newUser.name);
    
        res.send({ name: newUser.name, email: newUser.email });
    }
});

export default router;


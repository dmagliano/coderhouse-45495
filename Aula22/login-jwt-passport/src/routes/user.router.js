import { Router } from 'express';
import { UserModel } from '../models/user.model.js';
import passport from 'passport';

const router = Router();

router.post('/register', passport.authenticate('jwt') ,(req, res) => {
    const acess_token = generateToken(user);
    res.send(acess_token);
});

export default router;
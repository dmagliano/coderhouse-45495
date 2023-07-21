import {Router} from 'express';
import {UserModel} from '../models/user.model.js';  

const router = Router();

router.get('/', async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({erro: error.message});
    }
});

router.post('/', async (req, res) => {
    let novoUsuario = req.body;
    try{
        let result = await UserModel.create(novoUsuario);
        res.status(201).json(result);
    } catch (error) {
        console.log("Cannot create user with mongoose: " + error);
        res.status(400).json({erro: error.message});
    }
    
});

export default router;
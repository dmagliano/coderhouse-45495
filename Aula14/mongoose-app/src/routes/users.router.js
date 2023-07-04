import {Router} from 'express';
import { UserModel } from '../models/users.model.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.send({result: "sucess", payload: users});
    } catch (error) {
        console.log("Cannot get users with mongoose: " + error);
    }
});

router.post('/', async (req, res) => {

    let {firstName, lastName, email} = req.body;

    if(!firstName || !lastName || !email) return res.send({result: "error", payload: "Incomplete values"});

    let result = await UserModel.create({firstName, lastName, email});

    res.send({result: "sucess", payload: result});
});

router.put('/:uid', async (req, res) => {
    let {uid} = req.params;
    let userToReplace = req.body;
    if(!uid || !userToReplace.firstName || !userToReplace.lastName || !userToReplace.email) 
    return res.send({result: "error", payload: "Incomplete values"});
    try {
        let result = await UserModel.updateOne({_id: uid}, userToReplace);
        res.send({result: "sucess", payload: result});
    } catch (error) {
        console.log("Cannot update user with mongoose: " + error);
    }
});

router.delete('/:uid', async (req, res) => {
    let {uid} = req.params;
    if(!uid) return res.send({result: "error", payload: "Incomplete values"});
    try {
        let result = await UserModel.deleteOne({_id: uid});
        res.send({result: "sucess", payload: result});
    } catch (error) {
        console.log("Cannot delete user with mongoose: " + error);
    }  
});


export default router;
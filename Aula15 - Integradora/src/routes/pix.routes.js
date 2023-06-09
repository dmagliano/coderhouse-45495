import {Router} from 'express';
import { KeyModel } from '../models/keys.model.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const keys = await KeyModel.find();
        res.send({result: "sucess", payload: keys});
    } catch (error) {
        console.log("Cannot get pix keys with mongoose: " + error);
    }
});

router.post('/', async (req, res) => {

    let {key, keyType, user} = req.body;
    try {
        let result = await KeyModel.create({key, keyType, user});
        res.send({result: "sucess", payload: result});
    } catch (error) {
        console.log("Cannot create pix key with mongoose: " + error);
        res.status(400).send({result: "error", payload: error});
    }
});

router.delete('/', async (req, res) => {
    let keyToDelete = req.query.key;
    try {
        let result = await KeyModel.deleteOne({key: keyToDelete});
        res.send({result: "sucess", payload: result});
    } catch (error) {
        console.log("Cannot delete pix key with mongoose: " + error);
    } 
});

router.put('/', async (req, res) => { 
    let {key, user} = req.body;
    try {
        let result = await KeyModel.updateOne({key: key}, {user: user});
        res.send({result: "sucess", payload: result});
    } catch (error) {
        console.log("Cannot create pix key with mongoose: " + error);
        res.status(400).send({result: "error", payload: error});
    }
});



export default router;
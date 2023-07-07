import express from 'express';
import { KeyModel } from '../models/keys.model.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {});
});

router.get('/pix', async (req, res) => {
    try {
        const keys  = await KeyModel.find({},{_id:0, key:1, user:1}).lean();
        console.log(keys);
        let data = {
            chaves: keys
        }
        res.render('chaves', data);
    } catch (error) {
        console.log("Cannot get pix keys with mongoose: " + error);
        res.render('chaves', {});
    }
    
});



export default router;
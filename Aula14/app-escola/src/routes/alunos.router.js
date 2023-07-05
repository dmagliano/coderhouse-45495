import {Router} from 'express';
import { AlunoModel } from '../models/alunos.model.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const alunos = await AlunoModel.find();
        res.status(200).json(alunos)
        //res.send({result: "sucess", payload: alunos});
    } catch (error) {
        console.log("Cannot get users with mongoose: " + error);
    }
});


router.post('/', async (req, res) => {

    let novoAluno = req.body;
    try{
        let result = await AlunoModel.create(novoAluno);
        res.status(201).json(result);
    } catch (error) {
        console.log("Cannot create user with mongoose: " + error);
        res.status(400).json({erro: error.message});
    }
    
});

router.put('/:uid', async (req, res) => {
    let {uid} = req.params;
    let alunoParaAtualizar = req.body;
    try {
        let result = await AlunoModel.updateOne({_id: uid}, alunoParaAtualizar);
        res.status(200).json(result);
    } catch (error) {
        console.log("Cannot update user with mongoose: " + error);
        res.status(400).json({erro: error.message});
    }
});



router.delete('/:uid', async (req, res) => {
    let {uid} = req.params;
    try {
        let result = await AlunoModel.deleteOne({_id: uid});
        res.status(200).json(result);
    } catch (error) {
        console.log("Cannot delete user with mongoose: " + error);
        res.status(400).json({erro: error.message});
    }  
});

export default router;
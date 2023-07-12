import {Router} from 'express';
import { CursoModel } from '../models/cursos.model.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const cursos = await CursoModel.find();
        res.status(200).json(cursos)
    } catch (error) {
        console.log("Cannot get cursos with mongoose: " + error);
    }
});


router.post('/', async (req, res) => {

    let novoCurso = req.body;
    try{
        let result = await CursoModel.create(novoCurso);
        res.status(201).json(result);
    } catch (error) {
        console.log("Cannot create curso with mongoose: " + error);
        res.status(400).json({erro: error.message});
    }
    
});

export default router;
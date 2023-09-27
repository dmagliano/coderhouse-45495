import Router from 'express';
import { getPrevisao , getPrevisoPorCep } from '../controller/clima-controller.js';

const router = Router();

router.get('/', getPrevisao);
router.get('/:cep', getPrevisoPorCep);

export default router;
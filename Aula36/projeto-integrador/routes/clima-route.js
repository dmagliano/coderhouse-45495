import Router from 'express';
import { getPrevisao } from '../controller/clima-controller.js';

const router = Router();

router.get('/', getPrevisao);

export default router;
import { Router } from 'express';
import { createBusiness, getBusiness, getBusinessById } from '../controllers/business-controller.js';

const router = new Router();

router.get('/', getBusiness);
router.get('/:id', getBusinessById);
router.post('/', createBusiness);

export default router;
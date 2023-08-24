import { Router } from 'express';
import { getOrders, getOrderById, createOrder } from '../controllers/orders-controller.js'

const router = new Router();

router.get('/', getOrders);
router.get('/:id', getOrderById);
router.post('/', createOrder);

export default router;
import { Router } from 'express';

import * as orderController from '../controller/order.controller.js';

const router = Router();

router.get('/', orderController.getOrderList); //admin
router.post('/add', orderController.createOrder);

export default router;

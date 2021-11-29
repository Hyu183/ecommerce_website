import { Router } from 'express';

import * as orderController from '../controller/order.controller.js';
import { authenticateAdmin } from '../middlewares/jwt.mdw.js';

const router = Router();

router.get('/', authenticateAdmin, orderController.getOrderList); //admin
router.post('/add', orderController.createOrder);

export default router;

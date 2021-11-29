import { Router } from 'express';

import * as productController from '../controller/product.controller.js';
import { authenticateAdmin } from '../middlewares/jwt.mdw.js';

const router = Router();

router.get('/detail/:prodID', productController.getProduct);
router.get('/all/:catIDlv1', productController.getProductListBySecondCat);
router.get('/cat/:catIDlv0', productController.getProductListByThirdCat);

router.get('/', authenticateAdmin, productController.getProductList); //admin
router.post('/add', authenticateAdmin, productController.addProduct); //admin
router.post('/remove', authenticateAdmin, productController.removeProduct); //admin

export default router;

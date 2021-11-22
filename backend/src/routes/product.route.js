import { Router } from 'express';

import * as productController from '../controller/product.controller.js';

const router = Router();

router.get('/detail/:prodID', productController.getProduct);
router.get('/all/:catIDlv1', productController.getProductListBySecondCat);
router.get('/cat/:catIDlv0', productController.getProductListByThirdCat);

router.get('/', productController.getProductList); //admin
router.post('/add', productController.addProduct); //admin
router.post('/remove', productController.removeProduct); //admin

export default router;

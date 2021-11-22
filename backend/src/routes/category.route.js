import { Router } from 'express';

import * as categoryController from '../controller/category.controller.js';

const router = Router();

router.get('/', categoryController.getCategory);
router.get('/subCat/:catIDlv2', categoryController.getSubCategory);
router.get('/allSubCat', categoryController.getAllSubCategory);

router.get('/color', categoryController.getColor);
router.get('/size', categoryController.getSize);
router.get('/brand', categoryController.getBrand);

export default router;

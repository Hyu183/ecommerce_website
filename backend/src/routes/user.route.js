import { Router } from 'express';
import * as userController from '../controller/user.controller.js';
import authenticateJWT from '../middlewares/jwt.mdw.js';

const router = Router();

router.get('/checkEmailExisted', userController.checkEmailExisted);

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/forgot-password', userController.resetPassword);

router.get('/test', authenticateJWT, userController.test);

export default router;

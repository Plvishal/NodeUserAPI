import express from 'express';
import { login, logout, register } from '../controller/user.controller.js';
import veryfyToken from '../middleware/verifyToken.js';
const userRouter = express.Router();
userRouter.route('/register').post(register);
userRouter.route('/login').post(login);
userRouter.route('/logout').get(veryfyToken, logout);

export { userRouter };

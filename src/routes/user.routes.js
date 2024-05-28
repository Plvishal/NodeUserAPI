import express from 'express';
import { login, register } from '../controller/user.controller.js';

const userRouter = express.Router();
userRouter.route('/register').post(register);
userRouter.route('/login').post(login);

export { userRouter };

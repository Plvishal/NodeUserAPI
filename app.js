import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import { userRouter } from './src/routes/user.routes.js';
import workRouter from './src/routes/work.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.resolve('public')));

app.use('/user', userRouter);
app.use('/work', workRouter);
export { app };

import express from 'express';
import {
  appendFile,
  readfile,
  writeFile,
} from '../controller/readfile.controller.js';
import veryfyToken from '../middleware/verifyToken.js';

const workRouter = express.Router();

workRouter.route('/readfile').get(veryfyToken, readfile);
workRouter.route('/writeFile').get(veryfyToken, writeFile);
workRouter.route('/appendFile').get(veryfyToken, appendFile);
export default workRouter;

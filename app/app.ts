import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(helmet());
app.use(cors());
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000; 

const router = require('./routes/');
app.use('/', router);

app.listen(port);
console.log('listen on port ' + port);

export const prefecturesApiHost = process.env.PREFECTURES_API_HOST as string;
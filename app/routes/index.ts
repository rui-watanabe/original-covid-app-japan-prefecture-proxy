import express from 'express';
import helmet from 'helmet';
import { Prefectures } from '../services/prefectures';
import cors from 'cors';
import { prefecturesApiHost } from '../app';

const app = express();
app.use(helmet());
app.use(cors());
const router = express.Router();

router.get('/prefectures', (req, res, next) => {
  const service = new Prefectures();
  service
    .get()
    .then(result => res.status(200).send(result))
    .catch(next);
});

app.use((req, res) => {
  res.status(404);
  res.render('error', {
    param: {
      status: 404,
      message: 'not found'
    },
  });
});

module.exports = router;
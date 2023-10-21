import express from 'express';
import { reviewEventHandler } from './handler/review/ReviewEventHandler';

const app: express.Express = express();

reviewEventHandler().catch(console.error);

app.listen(6000, () => {
  console.log("Start on port 6000.");
});


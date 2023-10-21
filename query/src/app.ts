import express from 'express';
import { ReviewController } from './infrastructure/controllers/ReviewController';

const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(4000, () => {
  console.log("Start on port 4000.");
});

app.get('/', (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify({demo1: 'query', demo2: 20}));
})

app.get('/reviews', (req: express.Request, res: express.Response) => {
  const controller = new ReviewController();
  controller.findAll()
  .then(response => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.send(JSON.stringify({reviews: response}))
  });
})

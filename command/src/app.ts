import express from 'express';
import bodyParser from "body-parser";
import { ReviewController } from './infrastructure/controllers/ReviewController';
import { ReviewUsecase } from './application/usecases/ReviewUseCase';
import { ReviewRepository } from './infrastructure/database/ReviewRepository';
import { RedisClient } from './infrastructure/database/client/RedisClient';
import Redis from 'ioredis';

const app: express.Express = express();

const redis: Redis = new Redis();
const redisClient = new RedisClient(redis);
const reviewRepository = new ReviewRepository(redisClient);
const reviewUseCase = new ReviewUsecase(reviewRepository);
const reviewController = new ReviewController(reviewUseCase);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Start on port 3000.");
});

app.get('/', (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify({demo1: 'command', demo2: 20}));
});

app.post('/review', (req: express.Request, res: express.Response) => {
  reviewController.register(req);
  res.status(202).json({ message: 'accepted'});
});

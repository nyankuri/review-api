import express from 'express';
import bodyParser from "body-parser";
import { ReviewController } from './infrastructure/controllers/ReviewController';
import { ReviewUsecase } from './application/usecases/ReviewUseCase';
import { ReviewRepository } from './infrastructure/database/ReviewRepository';
import { RedisClient } from './infrastructure/database/client/RedisClient';
import Redis from 'ioredis';

const app: express.Express = express();

const redis: Redis = new Redis({
  host: process.env.NODE_ENV === 'docker' ? 'redis' : 'localhost',
  port: 6379,
});
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

app.post('/review', (req: express.Request, res: express.Response) => {
  reviewController
    .register(req)
    .then(responseReview => res.status(202).json({ review_id: responseReview.id, version: responseReview.version }))
});

app.put('/review', (req: express.Request, res: express.Response) => {
  reviewController
    .update(req)
    .then(responseReview => res.status(202).json({ review_id: responseReview.id, version: responseReview.version }))
})

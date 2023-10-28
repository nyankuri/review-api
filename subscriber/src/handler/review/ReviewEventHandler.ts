
import Redis from 'ioredis';
import { insertProduct, insertReview } from '../../infrastructure/repositories/ReviewRepository';

const CHANNEL_NAME = 'review-event';

export interface PublishedReviewEvent {
  id: string,
  product_id: string,
  recommend: string,
  text: string,
  version: string
}

export async function reviewEventHandler() {
  const redis = new Redis({
    host: process.env.NODE_ENV === 'docker' ? 'redis' : 'localhost',
    port: 6379,
  });
  await redis.subscribe(CHANNEL_NAME);

  redis.on('message', (channel, message) => {
    console.log(`Received message from channel ${channel}: ${message}`);

    const publishedReviewEvent = eventToJson(message);
    insertReview(publishedReviewEvent);
    insertProduct(publishedReviewEvent);
  });
}

const eventToJson = (message: string): PublishedReviewEvent => {
  const reviewEvent = JSON.parse(message);
  return {
    id: reviewEvent.id,
    product_id: reviewEvent.product_id,
    recommend: reviewEvent.recommend,
    text: reviewEvent.text,
    version: reviewEvent.version
  };
};

import { ReviewRepositoryInterface } from "../../domain/repositories/interfaces/ReviewRepositoryInterface";
import { RedisClient } from "./client/RedisClient";

export class ReviewRepository implements ReviewRepositoryInterface {

  private redisClient: RedisClient;

  constructor(redisClient: RedisClient) {
    this.redisClient = redisClient;
  }

  set(key: string, value: string): void {
    this.redisClient.set(key, value);
  }

  publish(message: string): void {
    this.redisClient.publish(message);
  }
}

import Redis from 'ioredis';

export class RedisClient {
  private readonly channelName = 'review-event';
  private redis: Redis

  constructor(redis: Redis) {
    this.redis = redis;
  }

  set(key: string, value: string | number): void {
    this.redis.set(key, value);
  }

  publish(message: string): void {
    this.redis.publish(this.channelName, message);
  }
}

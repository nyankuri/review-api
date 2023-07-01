import Redis from 'ioredis';

export class RedisClient {
  private redis: Redis

  constructor(redis: Redis) {
    this.redis = redis;
  }

  public set(key: string, value: string | number): void {
    this.redis.set(key, value);
  }

  // public publish(message: string): void {
  //   this.redis.publish('channel1', message);
  //   this.subscribeToChannel();
  // }

  // public async subscribeToChannel() {
  //   await this.redis.subscribe('channel1');
  
  //   this.redis.on('message', (channel, message) => {
  //     console.log(`Received message from channel ${channel}: ${message}`);
  //   });
  // }
}

export interface ReviewRepositoryInterface {
  set(key: string, value: string): void
  publish(message: string): void
}

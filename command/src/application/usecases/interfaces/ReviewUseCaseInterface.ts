import { RequestReview } from "../ReviewUseCase";

export interface ReviewUseCaseInterface {
  registerReview(review: RequestReview): Promise<void>;
}

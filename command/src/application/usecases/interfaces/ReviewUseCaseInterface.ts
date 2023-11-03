import { RequestReview, RequestUpdateReview } from "../ReviewUseCase";

export interface ReviewUseCaseInterface {
  registerReview(requestedReview: RequestReview): Promise<void>;
  updateReview(requestedReview: RequestUpdateReview): Promise<void>;
}

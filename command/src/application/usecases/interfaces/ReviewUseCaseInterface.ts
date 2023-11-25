import { RequestReview, RequestUpdateReview, ResponseReview } from "../ReviewUseCase";

export interface ReviewUseCaseInterface {
  registerReview(requestedReview: RequestReview): Promise<ResponseReview>;
  updateReview(requestedReview: RequestUpdateReview): Promise<ResponseReview>;
}

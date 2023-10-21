import { Review } from "../../domain/models/entities/review/Review";
import { Crypto } from "../../domain/models/values/Crypto";
import { UserAction } from "../../domain/models/values/UserAction";
import { ReviewRepositoryInterface } from "../../domain/repositories/interfaces/ReviewRepositoryInterface";
import { ReviewUseCaseInterface } from "./interfaces/ReviewUseCaseInterface";

export interface RequestReview {
  product_id: number,
  recommend: number,
  text: string
}

const FIRST_VERSION = "1";

export class ReviewUsecase implements ReviewUseCaseInterface {

  private reviewRepository: ReviewRepositoryInterface;

  constructor(reviewRepository: ReviewRepositoryInterface) {
    this.reviewRepository = reviewRepository;
  }
  async registerReview(requestedReview: RequestReview): Promise<void> {
    const reviewId = Crypto.of().value;
    const review = Review.of(
      reviewId,
      requestedReview.product_id,
      requestedReview.recommend,
      requestedReview.text,
      UserAction.CREATE,
      FIRST_VERSION);
    this.reviewRepository.set(reviewId, review.jsonOf());
    this.reviewRepository.publish(review.jsonOf());
  }
}

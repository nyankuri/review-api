import { ReviewRepositoryInterface } from "../../domain/repositories/interfaces/ReviewRepositoryInterface";
import { ReviewUseCaseInterface } from "./interfaces/ReviewUseCaseInterface";

export interface RequestReview {
  product_id: number,
  recommend: number,
  text: string
}

export class ReviewUsecase implements ReviewUseCaseInterface {

  private reviewRepository: ReviewRepositoryInterface;

  constructor(reviewRepository: ReviewRepositoryInterface) {
    this.reviewRepository = reviewRepository;
  }
  async registerReview(review: RequestReview): Promise<void> {
    this.reviewRepository.set("1", review.text);
  }
}

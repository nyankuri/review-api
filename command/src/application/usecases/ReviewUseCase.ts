import { Review } from "../../domain/models/entities/review/Review";
import { Crypto } from "../../domain/models/values/Crypto";
import { UserAction } from "../../domain/models/values/UserAction";
import { Version } from "../../domain/models/values/Version";
import { ReviewRepositoryInterface } from "../../domain/repositories/interfaces/ReviewRepositoryInterface";
import { ReviewUseCaseInterface } from "./interfaces/ReviewUseCaseInterface";

export type RequestReview = {
  product_id: number,
  recommend: number,
  text: string
}

export type RequestUpdateReview = {
  id: string,
  version: string,
  product_id: number,
  recommend: number,
  text: string
}

export type ResponseReview = {
  id: string,
  version: string
}

const FIRST_VERSION = "1";

export class ReviewUsecase implements ReviewUseCaseInterface {

  private reviewRepository: ReviewRepositoryInterface;

  constructor(reviewRepository: ReviewRepositoryInterface) {
    this.reviewRepository = reviewRepository;
  }
  async registerReview(requestedReview: RequestReview): Promise<ResponseReview> {
    const reviewId = Crypto.of();
    const review = Review.of(
      reviewId.value,
      requestedReview.product_id,
      requestedReview.recommend,
      requestedReview.text,
      UserAction.CREATE,
      Version.of(FIRST_VERSION));
    this.reviewRepository.set(review.idWithVersion(), review.jsonOf());
    this.reviewRepository.publish(review.jsonOf());

    return {
      id: review.id.value,
      version: review.version.value
    }
  }

  async updateReview(requestedReview: RequestUpdateReview): Promise<ResponseReview> {
    const review = Review.of(
      requestedReview.id,
      requestedReview.product_id,
      requestedReview.recommend,
      requestedReview.text,
      UserAction.UPDATE,
      Version.of(requestedReview.version).versionUp());
    this.reviewRepository.set(review.idWithVersion(), review.jsonOf());
    this.reviewRepository.publish(review.jsonOf());

    return {
      id: review.id.value,
      version: review.version.value
    }
  }
}

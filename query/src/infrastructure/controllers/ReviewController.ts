import { ReviewRepository } from "../repositories/ReviewRepository"

export type ReviewModel = {
  id: string,
  recommend: string,
  text: string,
  version: string
}

export type ProductModel = {
  product_id: string
}

export type ReviewResponseModel = {
  review: ReviewModel
  product: ProductModel

}

export class ReviewController {
  async findBy(reviewId: string): Promise<ReviewResponseModel | undefined> {
    const reviewRepository = new ReviewRepository();
    return reviewRepository.findBy(reviewId);
  }
}

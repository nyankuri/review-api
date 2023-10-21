import { ReviewRepository } from "../repositories/ReviewRepository"

export interface ReviewModel {
  id: string,
  recommend: string,
  text: string,
  version: string
}

export interface ProductModel {
  product_id: string
}

export interface ReviewResponseModel {
  review: ReviewModel
  product: ProductModel

}

export class ReviewController {
  async findAll(): Promise<ReviewResponseModel[]> {
    const reviewRepository = new ReviewRepository();
    return reviewRepository.findAll();
  }
}

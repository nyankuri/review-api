import express from "express";
import { RequestReview } from "../../application/usecases/ReviewUseCase";
import { ReviewUseCaseInterface } from "../../application/usecases/interfaces/ReviewUseCaseInterface";

export class ReviewController {

  private reviewUseCase: ReviewUseCaseInterface;

  constructor(reviewUseCase: ReviewUseCaseInterface) {
    this.reviewUseCase = reviewUseCase;
  }

  async register(req: express.Request): Promise<void> {
    this.reviewUseCase.registerReview(this.requestReviewOf(req))
  }

  private requestReviewOf(req: express.Request): RequestReview {
    const requestTask: RequestReview = req.body;
    return requestTask;
  }
}

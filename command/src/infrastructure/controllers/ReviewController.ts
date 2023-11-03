import express from "express";
import { RequestReview, RequestUpdateReview } from "../../application/usecases/ReviewUseCase";
import { ReviewUseCaseInterface } from "../../application/usecases/interfaces/ReviewUseCaseInterface";

export class ReviewController {

  private reviewUseCase: ReviewUseCaseInterface;

  constructor(reviewUseCase: ReviewUseCaseInterface) {
    this.reviewUseCase = reviewUseCase;
  }

  async register(req: express.Request): Promise<void> {
    this.reviewUseCase.registerReview(this.requestReviewOf(req));
  }

  async update(req: express.Request): Promise<void> {
    this.reviewUseCase.updateReview(this.requestUpdateReviewOf(req));
  }

  private requestReviewOf(req: express.Request): RequestReview {
    const requestReview: RequestReview = req.body;
    return requestReview;
  }

  private requestUpdateReviewOf(req: express.Request): RequestUpdateReview {
    const requestUpdateReview : RequestUpdateReview = req.body;
    return requestUpdateReview;
  }
}

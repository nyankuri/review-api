import { PublishedReviewEvent } from '../../handler/review/ReviewEventHandler';
import { saveProduct, saveReview } from '../../infrastructure/database/MySQLClient';

export async function insertReview(publishedReviewEvent: PublishedReviewEvent): Promise<void> {
  saveReview(publishedReviewEvent);
}

export async function insertProduct(publishedReviewEvent: PublishedReviewEvent): Promise<void> {
  saveProduct(publishedReviewEvent);
}

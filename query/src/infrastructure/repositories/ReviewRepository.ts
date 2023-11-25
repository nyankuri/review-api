import { ReviewResponseModel } from "../controllers/ReviewController";
import { MySQLClient } from "../databases/MySQLClient";

export class ReviewRepository {
  async findBy(reviewId: string): Promise<ReviewResponseModel | undefined> {
    const mysqlClient = new MySQLClient();
    return mysqlClient.findLatestReviewBy(reviewId);
  }
}

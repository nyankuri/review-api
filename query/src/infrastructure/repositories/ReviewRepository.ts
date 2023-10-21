import { ReviewResponseModel } from "../controllers/ReviewController";
import { MySQLClient } from "../databases/MySQLClient";

export class ReviewRepository {
  async findAll(): Promise<ReviewResponseModel[]> {
    const mysqlClient = new MySQLClient();
    return mysqlClient.findAllReviews();
  }
}

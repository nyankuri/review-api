import mysql, { RowDataPacket } from 'mysql2/promise';
import { ProductModel, ReviewModel, ReviewResponseModel } from '../controllers/ReviewController';

const dbConfig = {
  host: process.env.NODE_ENV === 'docker' ? 'mysql' : 'localhost',
  user: 'docker',
  password: 'docker',
  database: 'review_query'
};

const pool = mysql.createPool(dbConfig)

export class MySQLClient {
  async findLatestReviewBy(reviewId: string): Promise<ReviewResponseModel | undefined> {
    const connection = await pool.getConnection()
    const [rows] = await connection.query<RowDataPacket[]>(`select r.id, r.uuid, r.product_id, r.recommend, r.text, r.version from reviews r inner join products p on p.review_id = r.uuid where r.uuid = '${reviewId}' order by r.version desc limit 1`);
    connection.release();

    return rows.length > 0 ? this.reviewResponseModelOf(rows[0]) : undefined;
  }

  private async reviewResponseModelOf(latestReview: mysql.RowDataPacket): Promise<ReviewResponseModel> {
    const reviewModel: ReviewModel = {
      id: latestReview.uuid,
      recommend: latestReview.recommend,
      text: latestReview.text,
      version: latestReview.version
    };
    const productModel: ProductModel = {
      product_id: latestReview.product_id
    };
    return {
      review: reviewModel,
      product: productModel
    };
  }
}

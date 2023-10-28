import mysql, { RowDataPacket } from 'mysql2/promise';
import { ProductModel, ReviewModel, ReviewResponseModel } from '../controllers/ReviewController';

const dbConfig = {
  host: process.env.NODE_ENV === 'local' ? 'localhost' : 'mysql',
  // host: 'mysql',
  user: 'docker',
  password: 'docker',
  database: 'review_query'
};

const pool = mysql.createPool(dbConfig)

export class MySQLClient {
  async findAllReviews(): Promise<ReviewResponseModel[]> {
    const connection = await pool.getConnection()
    const [rows] = await connection.query<RowDataPacket[]>('select r.id, r.product_id, r.recommend, r.text, r.version from reviews r inner join products p on p.review_id = r.id')
    connection.release();
    return rows.map((row: RowDataPacket) => {
      const reviewModel: ReviewModel = {
        id: row.id,
        recommend: row.recommend,
        text: row.text,
        version: row.version
      }
      const productModel: ProductModel = {
        product_id: row.product_id
      }
      return {
        review: reviewModel,
        product: productModel
      }
    });
  }
}

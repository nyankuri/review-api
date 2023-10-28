import mysql from 'mysql2/promise';
import { PublishedReviewEvent } from '../../handler/review/ReviewEventHandler';

const dbConfig = {
  host: process.env.NODE_ENV === 'docker' ? 'mysql' : 'localhost',
  user: 'docker',
  password: 'docker',
  database: 'review_query'
};

export async function saveReview(publishedReviewEvent: PublishedReviewEvent): Promise<void> {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to MySQL!');

    const [result] = await connection.execute('INSERT INTO reviews(id, product_id, recommend, text, version) VALUES (?, ?, ?, ?, ?)',
    [
      publishedReviewEvent.id,
      publishedReviewEvent.product_id,
      publishedReviewEvent.recommend,
      publishedReviewEvent.text,
      publishedReviewEvent.version
    ]);
    console.log('Data Inserted:', result);

    connection.end();
  } catch (error) {
    console.error('MySQL Connection Error:', error);
  }
}

export async function saveProduct(publishedReviewEvent: PublishedReviewEvent): Promise<void> {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to MySQL!');

    const [result] = await connection.execute('INSERT INTO products(product_id, review_id) VALUES (?, ?)',
    [
      publishedReviewEvent.product_id,
      publishedReviewEvent.id
    ]);
    console.log('Data Inserted:', result);

    connection.end();
  } catch (error) {
    console.error('MySQL Connection Error:', error);
  }
}

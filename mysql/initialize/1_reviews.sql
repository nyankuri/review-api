CREATE TABLE IF NOT EXISTS reviews (
  id VARCHAR(36) NOT NULL PRIMARY KEY,
  product_id VARCHAR(16) NOT NULL,
  recommend VARCHAR(1) NOT NULL,
  text VARCHAR(256) NOT NULL,
  version VARCHAR(16) NOT NULL
);

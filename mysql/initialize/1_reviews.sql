CREATE TABLE IF NOT EXISTS reviews (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  uuid VARCHAR(36) NOT NULL,
  product_id VARCHAR(16) NOT NULL,
  recommend VARCHAR(1) NOT NULL,
  text VARCHAR(256) NOT NULL,
  version VARCHAR(16) NOT NULL,
  PRIMARY KEY (id)
);

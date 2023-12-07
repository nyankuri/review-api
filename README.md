# review-api
ReviewAPI CQRS + EventSourcing sample

## Usage
```bash
# docker
$ docker-compose up -d

# request
## post
$ curl --location 'localhost:3000/review' \
--header 'Content-Type: application/json' \
--data '{
    "product_id": 222,
    "recommend": 3,
    "text": "review post text"
}'

## put
$ curl --location --request PUT 'localhost:3000/review' \
--header 'Content-Type: application/json' \
--data '{
    "id": "{{review_id}}",
    "version": "1",
    "product_id": 222,
    "recommend": 5,
    "text": "review update text"
}'

## get
curl --location 'localhost:4000/review/31a563a6-e475-4b3e-80a6-ba932aba6547'
```

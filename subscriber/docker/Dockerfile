FROM node:18 AS builder
WORKDIR /app/subscriber
COPY ./subscriber/ ./
RUN npm install
RUN npm run build

FROM node:18-alpine
WORKDIR /app/subscriber
COPY --from=builder /app/subscriber/node_modules ./node_modules
COPY --from=builder /app/subscriber/dist ./dist
EXPOSE 6000
CMD ["node", "dist/app.js"]

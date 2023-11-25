FROM node:18 AS builder
WORKDIR /app/query
COPY ./query/ ./
RUN npm install
RUN npm run build

FROM node:18-alpine
WORKDIR /app/query
COPY --from=builder /app/query/node_modules ./node_modules
COPY --from=builder /app/query/dist ./dist
EXPOSE 4000
CMD ["node", "dist/app.js"]

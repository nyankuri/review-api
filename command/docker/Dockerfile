FROM node:18 AS builder
WORKDIR /app/command
COPY ./command/ ./
RUN npm install
RUN npm run build

FROM node:18-alpine
WORKDIR /app/command
COPY --from=builder /app/command/node_modules ./node_modules
COPY --from=builder /app/command/dist ./dist
EXPOSE 3000
CMD ["node", "dist/app.js"]

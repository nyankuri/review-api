FROM node:18

WORKDIR /app/subscriber
COPY ./subscriber/package*.json ./
RUN npm install
COPY ./subscriber/ .
RUN npm run build
EXPOSE 6000
CMD ["node", "dist/app.js"]

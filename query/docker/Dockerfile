FROM node:18

WORKDIR /app/query
COPY ./query/package*.json ./
RUN npm install
COPY ./query/ .
RUN npm run build
EXPOSE 4000
CMD ["node", "dist/app.js"]

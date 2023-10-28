FROM node:18

WORKDIR /app/command
COPY ./command/package*.json ./
RUN npm install
COPY ./command/ .
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/app.js"]

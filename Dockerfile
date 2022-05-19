FROM node:16.13-alpine

WORKDIR /app

COPY . .

run ls

RUN npm ci
RUN npm run build
RUN npm install -g http-server

run ls

EXPOSE 8080
CMD http-server dist/simple-app

FROM node:16.13-alpine

WORKDIR /db
COPY . .
RUN npm install -g json-server

EXPOSE 3000
CMD json-server --watch ./db.json --host 0.0.0.0

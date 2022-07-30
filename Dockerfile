FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm i --omit=dev

COPY ./src/* .

CMD [ "npm", "start" ]
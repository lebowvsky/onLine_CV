FROM node:14-alpine

RUN mkdir /application
WORKDIR /app

COPY package.json package.json

RUN npm install

COPY src src
COPY public public

CMD npm run start
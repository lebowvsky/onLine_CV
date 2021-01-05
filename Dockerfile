FROM node:14-alpine

RUN mkdir /app
WORKDIR /app
COPY package.json package.json
RUN npm i
COPY src src
COPY public public
CMD npm run start
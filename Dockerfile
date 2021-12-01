FROM node:16.13.0-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run generate && npm run build

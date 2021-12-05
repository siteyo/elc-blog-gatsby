FROM node:lts-alpine
WORKDIR /usr/src/app
EXPOSE 8000

COPY ./package*.json  .

RUN apk update && \
    apk add git python3 make g++ autoconf automake libtool pkgconfig nasm

RUN npm install -g gatsby-cli && \
    npm install


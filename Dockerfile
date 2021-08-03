FROM node:14.17-alpine
WORKDIR /usr/src/app
EXPOSE 8000

COPY ./package*.json  .

RUN apk update && \
    apk add git python make g++ autoconf automake libtool pkgconfig nasm && \
    npm install -g gatsby-cli && \
    npm install


# Stage: Build project

FROM node:18-alpine as builder

RUN apk update && apk upgrade

WORKDIR /usr/src

COPY package*.json ./

RUN ls /usr/src

RUN npm install

COPY . ./

RUN npm run build --verbose

# Stage: Copy project dist folder to nginx server

FROM nginx:alpine as production-build

ENV CONTENT_API_URL=''


COPY docker/nginx.conf /etc/nginx/nginx.conf

COPY docker/entrypoint.sh /entrypoint.sh

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /usr/src/dist/salon_web_app/browser /usr/share/nginx/html

EXPOSE 80


ENTRYPOINT ["/bin/sh", "/entrypoint.sh"]

FROM node:16.8.0-alpine3.11 AS builder

WORKDIR /app

COPY . .

RUN yarn install && yarn build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
FROM node:16.8.0-alpine3.11

WORKDIR /var/www/html

COPY . .

RUN yarn install

CMD sh -c "yarn install && yarn start"
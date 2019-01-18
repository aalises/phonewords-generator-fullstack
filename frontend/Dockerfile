FROM node:8

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.15.2-alpine

COPY ./dist /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
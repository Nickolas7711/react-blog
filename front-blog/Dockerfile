# Dockerfile for frontend (React)

# Stage 1: Build the application
FROM node:16 AS build

WORKDIR /app

COPY ./front-blog/package.json ./front-blog/package-lock.json ./
RUN npm install

COPY ./front-blog ./
RUN npm run build

# Stage 2: Serve the application
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 7777

CMD ["nginx", "-g", "daemon off;"]
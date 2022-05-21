FROM node:14-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm ci

COPY . .

# ENTRYPOINT ["npm", "run", "start:dev"]
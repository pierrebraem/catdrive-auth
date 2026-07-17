FROM node:26-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

CMD ["node", "--env-file", ".env", "app.ts"]
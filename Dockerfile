FROM node:16-alpine
WORKDIR /app
COPY package.json .
RUN npm install --quiet
COPY .env ./
COPY ./src ./src
CMD ["npm", "run", "start"]
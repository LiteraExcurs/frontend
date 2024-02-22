FROM node:21-alpine3.18 as builder
WORKDIR /apt/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm prune --production
CMD ["npm", "start"]
EXPOSE 3000
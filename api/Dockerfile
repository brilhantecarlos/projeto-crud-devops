# Dockerfile para o backend (api)
FROM node:18

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --production

COPY . .

EXPOSE 8800
CMD ["npm", "start"]

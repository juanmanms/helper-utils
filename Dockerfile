FROM node:22-alpine AS base

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

FROM base AS development

COPY . .

EXPOSE 3000

CMD ["npx", "next", "dev", "--hostname", "0.0.0.0"]
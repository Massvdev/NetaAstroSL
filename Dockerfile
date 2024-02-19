FROM node:20-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install pnpm -g

RUN pnpm install

RUN pnpm run build

EXPOSE 4321

CMD ["pnpm", "start","--host","0.0.0.0"]
 
 

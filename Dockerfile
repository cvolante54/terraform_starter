FROM node:alpine

WORKDIR "/app"

COPY ./package.json ./
RUN npm install
COPY . .

EXPOSE 1998

CMD ["npm", "run", "start"]

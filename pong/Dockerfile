FROM node:6.10.3-wheezy

RUN mkdir /app
WORKDIR /app

COPY package.json .

RUN npm install

COPY index.js .

CMD ["node", "index.js"]

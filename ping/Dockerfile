FROM node:6.10.3-wheezy

RUN mkdir /app
WORKDIR /app

COPY package.json .

RUN npm install

COPY index.js .

EXPOSE 3000
CMD ["node", "index.js", "3000"]

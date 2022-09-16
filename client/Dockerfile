FROM node:16.15.1

WORKDIR /client-image

COPY package.json /client-image/

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
FROM node:16.15.1

WORKDIR /server-image

COPY package.json /server-image

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
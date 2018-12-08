FROM node:10.14.1

ENV HOME=/home/app

COPY package.json package-lock.json $HOME/node_docker/

WORKDIR $HOME/node_docker

RUN npm install --silent --progress=false

COPY . ./

EXPOSE 3000
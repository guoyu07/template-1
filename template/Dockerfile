FROM daocloud.io/node:latest

MAINTAINER dingyiming

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json /home/app

RUN npm install

ADD . /home/app

ENTRYPOINT npm run start;sleep 100000000

EXPOSE 8080

ENV VIRTUAL_HOST <your subdomain>

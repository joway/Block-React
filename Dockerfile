FROM node:6.2.2
MAINTAINER Joway Wang "joway.w@gmail.com"

RUN mkdir /code

# For Cache
ADD ./package.json /code
WORKDIR /code

RUN npm install

ADD . /code

EXPOSE 9000

CMD ["npm","start"]
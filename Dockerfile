FROM node:6.2.2
MAINTAINER Joway Wang "joway.w@gmail.com"

RUN mkdir /code
WORKDIR /code

# For Cache
ADD ./package.json /code
RUN npm install

ADD . /code

EXPOSE 8000

CMD ["npm","start"]
FROM node:6.2.2
MAINTAINER Joway Wang "joway.w@gmail.com"

RUN mkdir /code

# For Cache
ADD ./package.json /code
WORKDIR /code

RUN npm config set registry https://registry.npm.taobao.org

RUN npm install --unsafe-perm

ADD . /code

EXPOSE 9000

CMD ["npm","run","dev"]
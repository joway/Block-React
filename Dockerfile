FROM node:6
MAINTAINER Joway Wang "joway.w@gmail.com"

RUN mkdir /code

# For Cache
ADD ./package.json /code
WORKDIR /code

RUN npm install --ignore-scripts --unsafe-perm

ADD . /code

EXPOSE 9000

CMD ["npm","run","dev"]
FROM node:6.2.2
MAINTAINER Joway Wang "joway.w@gmail.com"

RUN mkdir /code

# For Cache
ADD ./package.json /code
WORKDIR /code

RUN npm install --ignore-scripts --unsafe-perm

ADD . /code

EXPOSE 6076

CMD ["npm","start"]
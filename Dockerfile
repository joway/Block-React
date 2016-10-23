FROM node:6.5.0
MAINTAINER Joway Wang "joway.w@gmail.com"


RUN apt-get update && \
    apt-get install -y nginx

RUN mkdir /code && \
    mkdir /data && \
    mkdir -p /data/logs/nginx

ENV DATA /data/
ENV CODE /code/

WORKDIR $CODE
VOLUME $DATA

# For Cache
ADD ./package.json $CODE

RUN npm install --ignore-scripts --unsafe-perm

ADD . $CODE

RUN npm run build && \
    chmod +x ./endpoint.sh

EXPOSE 8000

CMD ["./endpoint.sh"]
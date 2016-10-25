FROM jwilder/nginx-proxy

MAINTAINER dingyiming

RUN mkdir -p /etc/nginx/conf.d

RUN ls -a

ADD . /etc/nginx/conf.d

EXPOSE 80:80

EXPOSE 443:443

VOLUME ["/path/to/certs:/etc/nginx/certs", "/path/to/nginx.conf:/etc/nginx/conf.d", "/var/run/docker.sock:/tmp/docker.sock"]

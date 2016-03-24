FROM nginx

RUN apt-get update -qq && apt-get -y install vim

EXPOSE 80 443

COPY nginx.conf /etc/nginx/nginx.conf
COPY /certs /etc/nginx/ssl

FROM nginx

RUN apt-get update -qq && apt-get -y install vim

EXPOSE 80 443

COPY nginx.conf /etc/nginx/nginx.conf

# To get this to work with SSL, you'll need to add a certs directory with self-signed certs
COPY /certs /etc/nginx/ssl

FROM hub.feinian.net/feinian/feserve:latest
ARG source
COPY ${source:-.} /app/feapp
EXPOSE 8080
# ENV BASE_PATH="test"
#COPY ${source:-default.template} /etc/nginx/conf.d/default.conf
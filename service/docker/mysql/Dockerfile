FROM --platform=linux/x86_64 mysql:8-debian

RUN apt-get update
RUN apt-get -y install locales-all

ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8

ENV TZ Asia/Tokyo

COPY ./docker/mysql/my.cnf /etc/my.cnf
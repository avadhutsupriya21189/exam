FROM httpd

COPY ./dist/user-portal/ /usr/local/apache2/htdocs/

EXPOSE 80

CMD apachectl -D FOREGROUND
FROM nginx:alpine

RUN mkdir -p /usr/share/nginx/html/assets \
    && chmod -R 755 /usr/share/nginx/html

COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf




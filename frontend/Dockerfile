FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Frontend files
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/

# 🔥 REQUIRED: assets (PDF / Video / Audio)
COPY assets /usr/share/nginx/html/assets

# Optional content directory
COPY content /usr/share/nginx/html/content

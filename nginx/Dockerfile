FROM nginx:alpine

# copy frontend UI (from project root)
COPY frontend /usr/share/nginx/html

# copy nginx config (from project root)
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf


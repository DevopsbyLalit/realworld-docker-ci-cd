FROM nginx:alpine

# REMOVE default nginx config
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy our nginx config
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy frontend UI
COPY frontend /usr/share/nginx/html


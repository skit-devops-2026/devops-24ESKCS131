FROM nginx:alpine

# Remove default nginx html files
RUN rm -rf /usr/share/nginx/html/*

# Copy frontend web application files
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/

# Copy custom Nginx configuration with /health and /metrics support
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Document exposed HTTP port
EXPOSE 80

# Run nginx in foreground mode
CMD ["nginx", "-g", "daemon off;"]

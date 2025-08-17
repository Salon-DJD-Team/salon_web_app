#!/bin/sh

# Write environment variable to /usr/share/nginx/html/config.json
mkdir -p /usr/share/nginx/html/config
cat << EOF  > /usr/share/nginx/html/config/config.json
{
  "apiUrl": "$API_URL"
}
EOF

# Start nginx
nginx -g 'daemon off;'

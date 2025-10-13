#!/bin/sh

# Write environment variable to /usr/share/nginx/html/config.json
mkdir -p /usr/share/nginx/html/config
cat << EOF  > /usr/share/nginx/html/config/config.json
{
  "contentApiUrl": "$CONTENT_API_URL",
  "contentApiKey": "$CONTENT_API_KEY"
}
EOF

# Start nginx
nginx -g 'daemon off;'

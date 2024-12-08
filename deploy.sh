#!/bin/bash

# Exit on error
set -e

echo "Starting VCC Platform deployment..."

# Build the application
echo "Building the application..."
npm run build

# Create application directory
echo "Setting up application directory..."
sudo mkdir -p /var/www/vcc
sudo chown -R $USER:$USER /var/www/vcc

# Copy application files
echo "Copying application files..."
cp -r dist/* /var/www/vcc/
cp package.json /var/www/vcc/
cp package-lock.json /var/www/vcc/
cp -r src/server /var/www/vcc/
cp src/server.ts /var/www/vcc/

# Create ecosystem file for PM2
echo "Creating PM2 ecosystem file..."
cat > /var/www/vcc/ecosystem.config.js << EOL
module.exports = {
  apps: [{
    name: 'vcc-platform',
    script: 'server.ts',
    interpreter: 'node',
    interpreter_args: '-r ts-node/register',
    env: {
      NODE_ENV: 'production',
      PORT: '3001',
      DATABASE_URL: 'postgresql://postgres:postgres@localhost:5432/vcc',
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
      STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
      JWT_SECRET: process.env.JWT_SECRET,
      FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
      FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET
    }
  }]
}
EOL

# Set up Nginx configuration
echo "Setting up Nginx configuration..."
sudo tee /etc/nginx/sites-available/vcc.myinvoices.today << EOL
server {
    listen 8080;
    server_name vcc.myinvoices.today;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }

    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }

    location /socket.io {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOL

# Enable the site
sudo ln -sf /etc/nginx/sites-available/vcc.myinvoices.today /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# Install dependencies and start application
echo "Installing production dependencies..."
cd /var/www/vcc
npm install --production

# Install global dependencies if needed
echo "Installing global dependencies..."
sudo npm install -g pm2 ts-node typescript

# Start the application with PM2
echo "Starting the application..."
pm2 delete vcc-platform 2>/dev/null || true
pm2 start ecosystem.config.js
pm2 save

echo "Deployment completed successfully!"

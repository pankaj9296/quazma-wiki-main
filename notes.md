FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory:::
export NODE_OPTIONS=--max-old-space-size=8192



Upgrade: 

pm2 stop WIKI

git pull origin main

yarn install --frozen-lockfile

export NODE_OPTIONS=--max-old-space-size=16384

yarn build

yarn sequelize db:migrate

pm2 start WIKI

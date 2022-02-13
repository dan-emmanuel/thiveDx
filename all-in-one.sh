#!/bin/bash -e


# GIT CLONE
git clone https://github.com/dan-emmanuel/thiveDx

# createuser db
createdb -U postgres csNews

psql -h 127.0.0.1 -d csNews -U postgres -f ./thrive/script.sql


# NPM INSTALL BE
cd ./thiveDx/backend
npm install
# NPM INSTALL FE
cd ../front-end
npm install
# RUN ALL
cd ../backend
npm run start("&")

cd ../front-end
npm start


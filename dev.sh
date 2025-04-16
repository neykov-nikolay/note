#!/usr/bin/env

cd ./client || exit
npm install
npm run dev &&
  cd ../server || exit
npm install
npm run dev

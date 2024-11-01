#!/usr/bin/env sh

set -e

rm -rf dist

pnpm i

pnpm build


cd dist 

git init
git add .

git remote add origin git@github.com:gausszhou/gausszhou.github.io.git

git checkout -b gh-pages
time=$(date "+%Y-%m-%d %H:%M")
git commit -m "docs: update in $time $1"
git push origin gh-pages -f

cd -
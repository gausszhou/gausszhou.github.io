cd dist 

git init 
git remote add github git@github.com:gausszhou/gausszhou.github.io.git;

git add .
time=$(date "+%Y-%m-%d %H:%M:%S")
git commit -m "update in $time"

git checkout -b gh-pages
git push github gh-pages -f
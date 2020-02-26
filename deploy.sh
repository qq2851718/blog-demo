
npm run docs:build


cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:qq2851718/blog-demo.git master:gh-pages

cd -
————————————————

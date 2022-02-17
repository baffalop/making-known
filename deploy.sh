#!/usr/bin/env sh

# abort on errors
set -e
# verbose
set -x

sed -i '' 's|base: '\''/'\''|base: '\''/making-known/'\''|' vite.config.ts

# build
pnpm build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init --initial-branch=gh-pages
git add -A
git commit -m 'deploy'

git push -f https://github.com/baffalop/making-known.git gh-pages:gh-pages

cd -

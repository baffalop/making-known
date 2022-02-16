#!/usr/bin/env sh

# abort on errors
set -e

sed -i '' 's:/font/:/making-known/font/:' index.html
sed -i '' 's:/audio/:/making-known/audio/:' src/Player.svelte

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

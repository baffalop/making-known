#!/usr/bin/env sh

# abort on errors
set -e
# verbose
set -x

pnpm build

cd dist
rm audio/*

zip -r making-known ./*

mv making-known.zip ..

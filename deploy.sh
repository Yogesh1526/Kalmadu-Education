#!/bin/bash

# Build the Angular app with the correct base href
npm run build:gh-pages

# Copy index.html to 404.html for GitHub Pages routing
cp dist/kalmadu-school/browser/index.html dist/kalmadu-school/browser/404.html

echo "Build complete! Files are in dist/kalmadu-school/browser/"
echo "Copy these files to your gh-pages branch or deploy via GitHub Actions"


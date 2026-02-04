#!/bin/bash

echo "Building Angular app for GitHub Pages..."

# Build the Angular app with the correct base href
npm run build:gh-pages

if [ $? -ne 0 ]; then
    echo "Build failed!"
    exit 1
fi

echo ""
echo "Build complete! Files are in dist/kalmadu-school/browser/"
echo ""
echo "To deploy manually:"
echo "1. Copy ALL files from dist/kalmadu-school/browser/ to your gh-pages branch root"
echo "2. Make sure 404.html exists in the root"
echo "3. Push to gh-pages branch"
echo ""
echo "Or use GitHub Actions for automatic deployment."


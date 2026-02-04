# PowerShell script for Windows deployment

# Build the Angular app with the correct base href
npm run build:gh-pages

# Copy index.html to 404.html for GitHub Pages routing
Copy-Item -Path "dist\kalmadu-school\browser\index.html" -Destination "dist\kalmadu-school\browser\404.html"

Write-Host "Build complete! Files are in dist\kalmadu-school\browser\"
Write-Host "Copy these files to your gh-pages branch or deploy via GitHub Actions"


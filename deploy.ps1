# PowerShell script for Windows deployment

Write-Host "Building Angular app for GitHub Pages..." -ForegroundColor Green

# Build the Angular app with the correct base href
npm run build:gh-pages

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "`nBuild complete! Files are in dist\kalmadu-school\browser\" -ForegroundColor Green
Write-Host "`nTo deploy manually:" -ForegroundColor Yellow
Write-Host "1. Copy ALL files from dist\kalmadu-school\browser\ to your gh-pages branch root" -ForegroundColor Yellow
Write-Host "2. Make sure 404.html exists in the root" -ForegroundColor Yellow
Write-Host "3. Push to gh-pages branch" -ForegroundColor Yellow
Write-Host "`nOr use GitHub Actions for automatic deployment." -ForegroundColor Cyan


# GitHub Pages Deployment Guide

## Important: Repository Name Check

Make sure your repository name is exactly `Kalmadu-Education` (case-sensitive). If it's different, update the base href in:
- `src/index.html` (line 6)
- `package.json` (build:gh-pages script)
- `404.html` (base href)

## Method 1: Using GitHub Actions (Recommended)

1. **Enable GitHub Pages**:
   - Go to your repository: `https://github.com/yogesh1526/Kalmadu-Education`
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save

2. **Push your code**:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **Wait for deployment**: The workflow will automatically build and deploy
   - Check Actions tab to see deployment progress
   - Usually takes 2-3 minutes

4. **Access your site**: `https://yogesh1526.github.io/Kalmadu-Education/`

## Method 2: Manual Deployment to gh-pages Branch

If you prefer manual deployment:

### Option A: Using gh-pages package (Easiest)

1. **Install gh-pages** (if not already installed):
   ```bash
   npm install -g gh-pages
   ```

2. **Build and deploy**:
   ```bash
   npm run build:gh-pages
   gh-pages -d dist/kalmadu-school/browser
   ```

   This will automatically:
   - Create/update the gh-pages branch
   - Copy all files from `dist/kalmadu-school/browser` to the branch root
   - Push to GitHub

### Option B: Manual Git Deployment

1. **Build the project**:
   ```bash
   npm run build:gh-pages
   ```

2. **Verify files exist**:
   ```bash
   # Check that these files exist:
   ls dist/kalmadu-school/browser/
   # Should see: index.html, 404.html, main.js, styles.css, etc.
   ```

3. **Deploy to gh-pages branch**:
   ```bash
   # Create/checkout gh-pages branch
   git checkout --orphan gh-pages
   
   # Remove all existing files
   git rm -rf .
   
   # Copy ALL files from dist/kalmadu-school/browser to root
   # Windows PowerShell:
   Copy-Item -Path "dist\kalmadu-school\browser\*" -Destination "." -Recurse -Force
   
   # Linux/Mac:
   cp -r dist/kalmadu-school/browser/* .
   cp -r dist/kalmadu-school/browser/.* . 2>/dev/null || true
   
   # IMPORTANT: Verify 404.html exists
   ls 404.html
   
   # Commit and push
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages --force
   
   # Switch back to main branch
   git checkout main
   ```

**CRITICAL**: Make sure ALL files from `dist/kalmadu-school/browser/` are copied to the root of gh-pages branch, including:
- index.html
- 404.html (must exist!)
- All .js files
- All .css files
- All assets
- favicon.ico

4. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)
   - Save

## Troubleshooting

### 404 Error Still Appears

1. **Check repository name**: Must be exactly `Kalmadu-Education`
2. **Verify base href**: Should be `/Kalmadu-Education/` (with trailing slash)
3. **Check 404.html exists**: Should be in the root of gh-pages branch
4. **Clear browser cache**: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
5. **Wait a few minutes**: GitHub Pages can take 1-5 minutes to update

### Routes Not Working

- Make sure `404.html` exists and contains the redirect script
- Verify `index.html` has the correct base href
- Check browser console for errors

### Build Errors

- Make sure Node.js version is 20 or higher
- Run `npm install` to ensure all dependencies are installed
- Check the Actions tab for build error details

## Verification Checklist

- [ ] Repository name matches base href (`Kalmadu-Education`)
- [ ] Base href in `src/index.html` is `/Kalmadu-Education/`
- [ ] `404.html` exists in the deployed files
- [ ] GitHub Pages is enabled in repository settings
- [ ] Build completed successfully (check Actions tab)
- [ ] Site is accessible at `https://yogesh1526.github.io/Kalmadu-Education/`


# Quick Fix for 404 Error on GitHub Pages

## The Problem
You're getting a 404 error because GitHub Pages can't find `index.html` in the root of your gh-pages branch.

## The Solution

### Step 1: Verify Repository Name
Your repository must be named exactly: `Kalmadu-Education` (case-sensitive)

### Step 2: Build the Project
```bash
npm run build:gh-pages
```

This will:
- Build your Angular app
- Set the correct base href (`/Kalmadu-Education/`)
- Copy `index.html` to `404.html` automatically

### Step 3: Deploy to gh-pages Branch

**Option A - Using gh-pages package (Recommended):**
```bash
npm install -g gh-pages
gh-pages -d dist/kalmadu-school/browser
```

**Option B - Manual deployment:**
```bash
# 1. Checkout gh-pages branch
git checkout --orphan gh-pages

# 2. Remove all files
git rm -rf .

# 3. Copy ALL files from dist folder to root
# Windows PowerShell:
Copy-Item -Path "dist\kalmadu-school\browser\*" -Destination "." -Recurse -Force

# Linux/Mac:
cp -r dist/kalmadu-school/browser/* .

# 4. Verify 404.html exists
ls 404.html

# 5. Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force

# 6. Go back to main branch
git checkout main
```

### Step 4: Enable GitHub Pages
1. Go to: https://github.com/yogesh1526/Kalmadu-Education/settings/pages
2. Under **Source**, select **Deploy from a branch**
3. Branch: `gh-pages`
4. Folder: `/` (root)
5. Click **Save**

### Step 5: Wait and Test
- Wait 1-5 minutes for GitHub Pages to update
- Visit: https://yogesh1526.github.io/Kalmadu-Education/
- Clear browser cache if needed (Ctrl+Shift+R)

## Common Mistakes

❌ **Wrong**: Only copying some files
✅ **Correct**: Copy ALL files from `dist/kalmadu-school/browser/` to gh-pages root

❌ **Wrong**: Missing 404.html file
✅ **Correct**: 404.html must exist in the root of gh-pages branch

❌ **Wrong**: Wrong base href
✅ **Correct**: Base href must be `/Kalmadu-Education/` (matches repository name)

❌ **Wrong**: Deploying from wrong folder
✅ **Correct**: Deploy from `dist/kalmadu-school/browser/` folder

## Still Not Working?

1. **Check the Actions tab**: If using GitHub Actions, check for build errors
2. **Verify files**: Make sure `index.html` and `404.html` exist in gh-pages branch root
3. **Check base href**: Open `index.html` and verify `<base href="/Kalmadu-Education/">`
4. **Repository name**: Must match exactly (case-sensitive)
5. **Wait longer**: Sometimes GitHub Pages takes 5-10 minutes to update

## Need Help?

Check the full deployment guide in `DEPLOY.md`


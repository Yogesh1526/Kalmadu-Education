const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, '../dist/kalmadu-school/browser');
const indexPath = path.join(distPath, 'index.html');
const notFoundPath = path.join(distPath, '404.html');

// Copy index.html to 404.html for GitHub Pages routing
if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('✓ Copied index.html to 404.html');
} else {
  console.error('✗ index.html not found at:', indexPath);
  process.exit(1);
}

// Also copy the root 404.html if it exists
const root404Path = path.join(__dirname, '../404.html');
if (fs.existsSync(root404Path)) {
  fs.copyFileSync(root404Path, notFoundPath);
  console.log('✓ Copied root 404.html to dist');
}

console.log('\n✓ Build ready for GitHub Pages deployment!');
console.log('  Files are in: dist/kalmadu-school/browser/');
console.log('  Copy all files from this folder to your gh-pages branch root\n');


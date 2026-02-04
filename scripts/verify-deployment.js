const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, '../dist/kalmadu-school/browser');

console.log('Verifying deployment files...\n');

const requiredFiles = ['index.html', '404.html', 'main.js'];

let allGood = true;

requiredFiles.forEach(file => {
  const filePath = path.join(distPath, file);
  if (fs.existsSync(filePath)) {
    console.log(`✓ ${file} exists`);
  } else {
    console.log(`✗ ${file} MISSING`);
    allGood = false;
  }
});

// Check base href in index.html
const indexPath = path.join(distPath, 'index.html');
if (fs.existsSync(indexPath)) {
  const content = fs.readFileSync(indexPath, 'utf8');
  if (content.includes('base href="/Kalmadu-Education/"')) {
    console.log('✓ Base href is correct');
  } else {
    console.log('✗ Base href is incorrect or missing');
    allGood = false;
  }
}

console.log('\n' + (allGood ? '✓ All checks passed!' : '✗ Some checks failed!'));

if (!allGood) {
  process.exit(1);
}


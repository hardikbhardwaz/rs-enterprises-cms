const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'dist', 'build');
const dest = path.join(__dirname, '..', 'build');

if (fs.existsSync(src)) {
  fs.cpSync(src, dest, { recursive: true });
  console.log('[postbuild] Copied build artifacts from dist/build to build directory successfully.');
} else {
  const distSrc = path.join(__dirname, '..', 'dist');
  if (fs.existsSync(distSrc)) {
    fs.cpSync(distSrc, dest, { recursive: true });
    console.log('[postbuild] Copied build artifacts from dist to build directory successfully.');
  }
}
